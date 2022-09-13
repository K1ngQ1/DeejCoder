import React from "react";

export default function ProfilePage() {
    return (
        <>
            <div className="">
                <div className="">image</div>
                {/* <div className=""> */}
                    <ul>
                        <li>Name</li>
                        <li>Name</li>
                        <li>Name</li>
                        <li>Name</li>
                    </ul>
                {/* </div> */}
            </div>
            <div>
                <h1 className="text-xl">Your saved projects:</h1>
                <br/>
                <div className="artboard rounded-xl border border-solid border-primary p-4 w-full mb-2 columns-3">
                    <div className="text-lg">Your Project Title</div>
                    <div>Date created</div>
                    <div className="btn-group">
                        <button className="btn">view</button>
                        <button className="btn">delete</button>
                    </div>
                </div>
            </div>
        </>
    );
}
