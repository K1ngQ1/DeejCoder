import React from "react";

export default function Login() {
    return (
        <div className="box-content w-full justify-center items-center my-12">
                <h1 className="text-4xl">Login or Create Profile:</h1>
                <br/>
            <form>
                <h1 className="text-lg">Login:</h1>
                <input className="input m-2 w-1/4" placeholder="email"></input>
                <br />
                <input className="input m-2 w-1/4" placeholder="password"></input>
                <br />
                <button className="btn btn-primary w-1/4">Login</button>
            </form>
            <br/>
                <h1 className="text-md">Create Profile</h1>
                <div className="btn-group justify-center items-center">
                    <button className="btn btn-secondary w-1/12">Google</button>
                    <button className="btn btn-secondary w-1/12">FaceBook</button>
                </div>
        </div>
    );
}
