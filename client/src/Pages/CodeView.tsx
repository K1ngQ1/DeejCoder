import React from "react";
import { useParams } from "react-router-dom";

import ArduinoOutput from "../components/coder/ArduinoOutput";
import ConfigYaml from "../components/coder/configYaml";

export default function CodeView() {
    const { id } = useParams<{id: string}>();
    return (
        <div className="artboard bg-base-200 rounded-xl border border-solid border-primary p-4 w-8/12 mb-2 grid grid-cols-3 justify-center items-center">
            <div className="text-3xl col-span-3">{id}</div>
            <div className="col-span-3">Date created</div>
            <br />
            <div className={`col-span-3`}>
                <h1 className="col-span-3">Arduino code:</h1>
                <ArduinoOutput sliderCount={6} analogId={[]} />
            </div>
            <div className={`col-span-3`}>
                <br />
                <h1 className="col-span-3">config.yaml:</h1>
                <ConfigYaml
                  sliderCount={6}
                  sliderConfig={[]}
                  trigger= {true}
                  comPort={"9"}
                  configNoise={"default"}
                  invertSlider={"false"}
                />
            </div>
        </div>
    );
}
