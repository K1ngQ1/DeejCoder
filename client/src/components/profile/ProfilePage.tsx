import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProfilePage() {
    const [visible, setVisible] = useState(true);

    return (
        <>
            <div className="">
                <h2 className="text-3xl">UserName</h2>
            </div>
            <br />
            <div>
                <h1 className="text-xl">Your saved projects:</h1>
                <br />
                <div className="artboard rounded-xl border border-solid border-primary p-4 w-full mb-2 grid grid-cols-3 items-center justify-items-center">
                    <div className="text-lg">Your Project Title</div>
                    <div>Date created</div>
                    <div>
                        {/* change value for the link */}
                        <Link to={`/code/asdf1`}>
                            <button className="btn">view</button>
                        </Link>
                        <button className="btn">delete</button>
                    </div>
                </div>
            </div>
            <div>
                <button className="btn">Log Out</button>
            </div>
        </>
    );
}
