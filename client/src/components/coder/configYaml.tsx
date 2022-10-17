//setting up interface for props import into component
interface state {
    sliderCount: Number;
    sliderConfig: Array<string>;
    trigger: boolean;
    comPort: String;
    configNoise: String;
    invertSlider: String;
}

export default function ConfigYaml(props: state) {
    const slider_mapper = (string: String) => {
        return `${string}`;
    };

    const slider_action = (array: Array<string>) => {
        var help = "";
        for (var val of array) {
            help += "\t" + slider_mapper(val) + "\n\t";
        }
        return help;
    };

    const code = `
    # process names are case-insensitive
    # you can use 'master' to indicate the master channel, or a list of process names to create a group
    # you can use 'mic' to control your mic input level (uses the default recording device)
    # you can use 'deej.unmapped' to control all apps that aren't bound to any slider 
    # (this ignores master, system, mic and device-targeting sessions) (experimental)
    # windows only - you can use 'deej.current' to control the currently active app (whether full-screen or not) (experimental)
    # windows only - you can use a device's full name, i.e. "Speakers (Realtek High Definition Audio)", 
    # to bind it. this works for both output and input devices
    # windows only - you can use 'system' to control the "system sounds" volume
    # important: slider indexes start at 0, regardless of which analog pins you're using!

    # please note to add application name instead of **
    # for example if "**.exe" and you want discord add "discord.exe"

    slider_mapping:
    ${slider_action(props.sliderConfig)}
    # set this to true if you want the controls inverted (i.e. top is 0%, bottom is 100%)
    invert_sliders: ${props.invertSlider}

    # settings for connecting to the arduino board
    com_port: COM${props.comPort}
    baud_rate: 9600

    # adjust the amount of signal noise reduction depending on your hardware quality
    # supported values are "low" (excellent hardware), "default" (regular hardware) or "high" (bad, noisy hardware) 
    noise_reduction: ${props.configNoise}
    `;
    return (
        <>
            <div className="mockup-code bg-primary text-primary-content justify-start text-left">
                <pre data-prefix="$">
                    <code>{code}</code>
                </pre>
            </div>
        </>
    );
}
