import React from "react";

export default function ConfigYaml() {
    const code = `
    slider_mapping:
        0: master
        1: spotify.exe
        2: discord.exe
        3: deej.unmapped
    com_port: COM3
    baud_rate: 9600
    noise_reduction: default
    `
    return (
        <>
            <h2>Config.yaml</h2>
            <div className="mockup-code bg-primary text-primary-content justify-start text-left">
                <pre data-prefix="$">
                    <code>{code}</code>
                </pre>
            </div>
        </>
    );
}
