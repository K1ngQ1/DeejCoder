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
                <a className="btn btn-accent" href="#install">
                    How to install Arduino IDE
                </a>
                <a className="btn btn-accent" href="#site">How to use our site</a>
                <a className="btn btn-accent" href="#flash">
                    How to flash to arduino
                </a>
                <a className="btn btn-accent" href="#deejUse">
                    How to use Deej software
                </a>
                <a className="btn btn-accent" href="#deejMake">
                    How to make Deej controller
                </a>
            </div>
            <Ht_installArd />
            <Ht_site />
            <Ht_Flash />
            <Ht_UseDeej />
            <Ht_MakeDeej />
        </>
    );
}
