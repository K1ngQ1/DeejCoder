import React, { useState, useEffect } from "react";
import CodeViewer from "./codeViewer";
import { useCodeContext } from "../../hooks/useCodeContext";

interface state {
    loggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<any>>;
}
export default function ProfilePage(props: state) {
    const { code, dispatch } = useCodeContext();

    useEffect(() => {
        const fetchCode = async () => {
            const response = await fetch("/api/code");
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: "SET_CODE", payload: json });
            }
        };
        fetchCode();
    }, []);

    const logOutSubmit = () => {
        props.setLoggedIn(false);
    };

    return (
        <>
            <div className="">
                <h2 className="text-3xl">UserName</h2>
            </div>
            <br />
            <div>
                <h1 className="text-xl">Your saved projects:</h1>
                <br />
            </div>
            <div>
                {code &&
                    code.map((item) => (
                        <p key={item._id}>
                            <CodeViewer
                                codeName={item.codeName}
                                date={item.updatedAt}
                                id={`${item._id}`}
                            />
                        </p>
                    ))}
            </div>
            <div>
                <button className="btn" onClick={logOutSubmit}>
                    Log Out
                </button>
            </div>
        </>
    );
}
