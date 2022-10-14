import React, { useState } from "react";

interface state {
    loggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<any>>;
}

export default function Login(props: state) {
    const [account, setAccount] = useState(true);
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const loginSubmit = () => {
        console.log(userName, password)
        props.setLoggedIn(true)
    }
    return (
        <div className="box-content w-full justify-center items-center my-12">
            <h1 className="text-4xl">
                {!account ? "Create Account:" : "Login"}
            </h1>
            <br />
            {account ? (
                <>
                    <input
                        className="input m-2 w-1/4"
                        placeholder="email"
                        onChange={(e)=> {setUserName(e.target.value)}} 
                    ></input>
                    <br />
                    <input
                        className="input m-2 w-1/4"
                        type="password" 
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <br />
                    <button className="btn btn-primary w-1/4" value="Submit" onClick={loginSubmit}>Login</button>
                </>
            ) : (
                
                "We don't support making user accounts just yet!"
            )}
            <br />
            {/* <h1 className="text-md">Create Profile</h1> */}
            {/* <div className="btn-group justify-center items-center">
                <button className="btn btn-secondary w-1/12">Google</button>
                <button
                    className="btn btn-secondary w-3/12"
                    onClick={() => {
                        setAccount(!account);
                    }}
                >
                    {account ? "Create profile" : "Login"}
                </button>
                <button className="btn btn-secondary w-1/12">FaceBook</button>
            </div> */}
        </div>
    );
}
