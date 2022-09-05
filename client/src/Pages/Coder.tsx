import React, { useState } from "react";
import ArduinoOutput from "../components/coder/ArduinoOutput";
import ConfigYaml from "../components/coder/configYaml";

export default function Coder() {
    const [displayState, setDisplayState] = useState(false);
    const [sliderCount, setSliderCount] = useState(0);

    return (
        <div className="artboard bg-base-200 rounded-xl border border-solid border-primary p-4 w-10/12 mb-2">
            <h1 className="text-5xl">DeejCoder:</h1>
            <br/>
            <br/>
            <h1 className="text-3xl">Arduino File Setup:</h1>
            <br/>
            <h2>Project Name:</h2>
            <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
            />
            <br/>
            <br/>
            <h2>How many knobs/sliders? Amount: {sliderCount}</h2>
            <input
                type="range"
                min="0"
                max="10"
                className="range range-primary"
                step="1"
                value={sliderCount}
                onChange={(e) => {
                    setSliderCount(e.target.valueAsNumber);
                }}
            />
            <div className="w-full flex justify-between text-xs px-2">
                {Array.from(Array(11), (e, i) => {
                    return <span key={i}>{i}</span>;
                })}
            </div>
                <br/>
            <div>
              <h2>What analog pins are the knobs connected to?</h2>
              <br/>
              {Array.from(Array(sliderCount), (e,i) => {
                return(
                  <>
                  slider {i+1}:
                  <select className="select m-1" key={i}>
                    {Array.from(Array(11), (e, i) => {
                      return <option value={i}>A{i}</option>
                    })}
                  </select>
                  </>
                )
              })}
            </div>

            <br />
            <h1 className="text-3xl">Config File Setup:</h1>
            <br />
            <ArduinoOutput 
            sliderCount = {sliderCount}
            />
            <br />
            <ConfigYaml />
            <br />
            <button className="btn btn-primary">Save Project</button>
        </div>
    );
}
