import React from "react";

export default function ConfigYaml() {
    return (
        <>
            <h2>Config.yaml</h2>
            <div className="mockup-code bg-primary text-primary-content justify-start text-left">
                <pre data-prefix="$">
                    <code>slider_mapping:</code>
                </pre>
                <pre data-prefix="$">
                    <code>  0: master</code>
                </pre>
                <pre data-prefix="$">
                    <code>  1: spotify.exe</code>
                </pre>
                <pre data-prefix="$">
                    <code>  2: discord.exe</code>
                </pre>
                <pre data-prefix="$">
                    <code>  3: deej.unmapped</code>
                </pre>
                <pre data-prefix="$">
                    <code>com_port: COM3</code>
                </pre>
                <pre data-prefix="$">
                    <code>baud_rate: 9600</code>
                </pre>
                <pre data-prefix="$">
                    <code>noise_reduction: default</code>
                </pre>
            </div>
        </>
    );
}
