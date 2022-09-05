import React, { useState } from "react";
import ConfigYaml from "../components/coder/configYaml";

export default function Coder() {
    const [displayState, setDisplayState] = useState(false);

    return (
        <div className="artboard bg-base-200 rounded-xl border border-solid border-primary p-4 w-10/12 mb-2">
            <h1>Deej Coder:</h1>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Display</span>
                    <input
                        type="checkbox"
                        className="toggle toggle-primary"
                        id="display"
                        onClick={() => {
                            setDisplayState(!displayState);
                        }}
                    />
                </label>
            </div>
            <div>{displayState ? <div>ksladjf;asjdfkdas</div> : <div />}</div>
            <h2>Arduino Code</h2>
            <div className="mockup-code bg-primary text-primary-content">
                <pre>
                    <code>can be any color!</code>
                </pre>
            </div>
            <br />
            <ConfigYaml />
        </div>
    );
}
