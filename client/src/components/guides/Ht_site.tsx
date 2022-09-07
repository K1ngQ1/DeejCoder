import React from "react";

export default function Ht_site() {
    return (
        <div
            className="artboard bg-base-200 rounded-xl border border-solid border-primary p-2 w-10/12 m-2 px-7"
            id="site"
        >
            <div className="text-base">
                <h1 className="text-3xl font-bold">How to use our site</h1>
                <h1 className="text-xl">
                    You can watch this youtube video as a guide or follow the
                    text instructions below the video.
                </h1>
                <br />
                <div className="aspect-w-16 aspect-h-9 mx-5">
                    <iframe
                        className="align-center"
                        src="https://www.youtube.com/embed/xNRJwmlRBNU"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    ></iframe>
                </div>
                <br />
                <h1 className="text-xl font-semibold">Text Instructions.</h1>
                <br />
                <p>
                    To use our site first navigate to the coder page by clicking
                    on the "Coder" button in to top toolbar.
                </p>
                <p>
                    Also note you can change the theme of the website with the
                    dropdown on the bottom left of your screen and clicking on a
                    theme. The default is "dark".
                </p>
                <br />
                <p>
                    Once the coder page has loaded you can start configuring
                    your setup for the Arduino code.
                </p>
                <p>
                    Firstly enter the name of the project if you want to name
                    your file.
                </p>
                <br />
                <p>
                    After you have entered the name of the project select how
                    many sliders or knobs your project has.
                </p>
                <br />
                <p>
                    Then you can select which ports the output of the
                    slider/knobs you soldered to your Arduino are. Slider 1
                    being knob one on your arduino and selecting the analog pin
                    it is connected to.
                </p>
                <br />
                <p>
                    You can see the inputs of the arduino labeled like so or
                    labeled similarly. You could always also see which ports are
                    which on the schemtic of your arduino online.
                </p>
                <br />
                <p>
                    If you wish to only use the Arduino side coding you can
                    simply copy the code and paste it into the Arduino IDE and
                    follow the steps on{" "}
                    <a className="underline text-primary" href="#flash">
                        How to flash your arduino
                    </a>
                    . If you haven't installed the Arduino IDE follow the guide
                    bellow,{" "}
                    <a className="underline text-primary" href="#install">
                        How to install the Arduino IDE
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}
