import { useState } from "react";
import { useSignUp } from "../../hooks/useSignup";
import { useLogIn } from "../../hooks/useLogin";

export default function Login() {
    //state declaration
    const [account, setAccount] = useState(true);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    //sign up hook declare
    const { signup, isLoading, error } = useSignUp();
    //login hook declare
    const { login, isLoadingI, errorI } = useLogIn();

    //functions for submitting log in and sign in requests
    const loginSubmit = async () => {
        await login(userName, password);
    };
    const signUpSubmit = async () => {
        await signup(userName, password);
    };

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
                        placeholder="Username"
                        value={userName}
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                    ></input>
                    <br />
                    <input
                        className="input m-2 w-1/4"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <br />
                    {errorI && <div className="text-red-500">{errorI}</div>}
                    <br />
                    {/* <Link to="/profile"> */}
                    <button
                        className="btn btn-primary w-1/4"
                        value="Submit"
                        onClick={loginSubmit}
                        disabled={isLoadingI}
                    >
                        Log In
                    </button>
                    {/* </Link> */}
                </>
            ) : (
                <>
                    <input
                        className="input m-2 w-1/4"
                        placeholder="Username"
                        value={userName}
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                    ></input>
                    <br />
                    <input
                        className="input m-2 w-1/4"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>

                    <br />
                    <label>
                        <span className="label-text-alt text-accent">
                            make use of at least one capital letter, number and
                            unique key (!, @, #, etc.)
                        </span>
                    </label>
                    {error && <div className="text-red-500">{error}</div>}

                    <br />
                    {/* <Link to="/profile"> */}
                    <button
                        className="btn btn-primary w-1/4"
                        value="Submit"
                        onClick={signUpSubmit}
                        disabled={isLoading}
                    >
                        Sign Up
                    </button>
                    {/* </Link> */}
                </>
            )}
            <br />
            {/* <h1 className="text-md">Create Profile</h1> */}
            <div className="btn-group justify-center items-center">
                {/* <button className="btn btn-secondary w-1/12">Google</button> */}
                <button
                    className="btn btn-secondary w-3/12"
                    onClick={() => {
                        setAccount(!account);
                    }}
                >
                    {account ? "Create profile" : "Login Page"}
                </button>
                {/* <button className="btn btn-secondary w-1/12">FaceBook</button> */}
            </div>
        </div>
    );
}
