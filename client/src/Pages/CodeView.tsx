import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import { calendarStrings } from '../components/calendarStrings'
import { useAuthContext } from "../hooks/useAuthContext";


import ArduinoOutput from "../components/coder/ArduinoOutput";
import ConfigYaml from "../components/coder/configYaml";

export default function CodeView() {
    //uses params to see what code to display
    const { id } = useParams<{id: string}>();
    const { user } = useAuthContext();

    //state for the information displayed on the page
    const [codeName, setCodeName] = useState('loading...')
    const [sliderConfig, setSliderConfig] = useState(['loading...'])
    const [analogId, setAnalogId] = useState(['loading...'])
    const [comPort, setComPort] = useState('loading...')
    const [configNoise, setConfigNoise] = useState('loading...')
    const [invertSlider, setInvertSlider] = useState('loading...')
    const [created, setCreated] = useState('loading...')
    const [sliderCount, setSliderCount] = useState(0)

    const calendarString = calendarStrings

    useEffect(() => {
        const fetchCode = async () => {
            //blocks the function if user is not signed in
            if(!user){
                return
            }
            //fetch the single code from the db
            const response = await fetch(`/api/code/${id}`,{
                headers: {
                    'Authorization' : `Bearer ${user.token}`
                },
            })
            const json = await response.json()
            //if response ok sets the info in the page to json received
            if(response.ok) {
                setCodeName(json.codeName)
                setSliderConfig(json.sliderConfig)
                setAnalogId(json.analogId)
                setComPort(json.comPort)
                setConfigNoise(json.configNoise)
                setInvertSlider(json.invertSlider)
                setCreated(json.createdAt)
                setSliderCount(json.sliderCount)
            }
        }
        fetchCode()
    },[])
    return (
        <div className="artboard bg-base-200 rounded-xl border border-solid border-accent p-4 w-8/12 mb-2 grid grid-cols-3 justify-center items-center">
            <div className="text-3xl col-span-3">
            {codeName}
            </div>
            <div className="col-span-3">
                <Moment calendar={calendarString}>
                {created}
                </Moment>
            </div>
            <br />
            <div className={`col-span-3`}>
                <h1 className="col-span-3">Arduino code:</h1>
                <ArduinoOutput sliderCount={sliderCount} analogId={analogId} />
            </div>
            <div className={`col-span-3`}>
                <br />
                <h1 className="col-span-3">config.yaml:</h1>
                <ConfigYaml
                  sliderCount={sliderCount}
                  sliderConfig={sliderConfig}
                  trigger= {true}
                  comPort={comPort}
                  configNoise={configNoise}
                  invertSlider={invertSlider}
                />
            </div>
        </div>
    );
}
