import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

//auth import
import { useCodeContext } from "../../hooks/useCodeContext";
import { useAuthContext } from "../../hooks/useAuthContext";

//import for time string format
import { calendarStrings } from "../calendarStrings";

//state declaration
interface state {
    codeName: string;
    date: number;
    id: string;
}

export default function CodeViewer(props: state) {
    //context functions
    const { dispatch } = useCodeContext();
    const { user } = useAuthContext();

    //date formatting
    const calendarString = calendarStrings;

    //request to delete code from db
    const handleDelete = async () => {
        //tests to see if user is logged in
        if (!user) {
            return;
        }
        //fetch request to delete code with user token
        const response = await fetch(`/api/code/${props.id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        });
        const json = await response.json();
        //removes item from the current state to keep state in sync with db
        if (response.ok) {
            dispatch({ type: "DELETE_CODE", payload: json });
        }
    };
    return (
        <div className="artboard rounded-xl border border-solid border-primary p-4 w-full mb-2 grid grid-cols-3 items-center justify-items-center">
            <div className="text-lg">
                <h1 className="text-xs">Title:</h1>
                {props.codeName}
            </div>
            <div className="text-lg">
                <h1 className="text-xs">Date:</h1>
                <Moment calendar={calendarString}>{props.date}</Moment>
            </div>
            <div>
                {/* change value for the link */}
                <Link to={`/code/${props.id}`}>
                    <button className="btn">view</button>
                </Link>
                <button className="btn" onClick={handleDelete}>
                    delete
                </button>
            </div>
        </div>
    );
}
