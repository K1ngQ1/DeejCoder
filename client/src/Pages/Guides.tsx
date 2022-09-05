import React from "react";

//import custom components
import Ht_Flash from "../components/guides/Ht_Flash";
import Ht_MakeDeej from "../components/guides/Ht_MakeDeej";
import Ht_UseDeej from "../components/guides/Ht_UseDeej";
import Ht_installArd from "../components/guides/Ht_installArd";
import Ht_site from "../components/guides/Ht_site";

export default function () {
    return (
        <>
            <div className="artboard bg-base-200 rounded-xl border border-solid border-primary p-2 w-10/12 m-2">
                <button className="btn btn-accent">
                    How to install Arduino IDE
                </button>
                <button className="btn btn-accent">How to use our site</button>
                <button className="btn btn-accent">
                    How to flash to arduino
                </button>
                <button className="btn btn-accent">
                    How to use Deej software
                </button>
                <button className="btn btn-accent">
                    How to make Deej controller
                </button>
            </div>
            <Ht_site />
            <Ht_MakeDeej />
            <Ht_installArd />
            <Ht_Flash />
            <Ht_UseDeej />
        </>
    );
}
