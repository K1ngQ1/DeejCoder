import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import {useCodeContext} from "../../hooks/useCodeContext"

interface state {
    codeName: string;
    date: number;
    id: string
}

export default function CodeViewer(props: state) {
    const { dispatch } = useCodeContext()
    const calendarStrings = {
        lastDay: "[Yesterday at] LT",
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        lastWeek: "[last] dddd [at] LT",
        nextWeek: "dddd [at] LT",
        sameElse: "L",
    };

    const handleDelete = async () => {
        const response = await fetch(`/api/code/${props.id}`, {
            method: 'DELETE'
        })
        const json = await response.json();

        if(response.ok){
            dispatch({type: "DELETE_CODE", payload: json})
        }
    }
    return (
        <div className="artboard rounded-xl border border-solid border-primary p-4 w-full mb-2 grid grid-cols-3 items-center justify-items-center">
            <div className="text-lg">
                <h1 className="text-xs">Title:</h1>
                {props.codeName}
            </div>
            <div className="text-lg">
                <h1 className="text-xs">Date:</h1> 
                <Moment calendar={calendarStrings}>
                    {props.date}
                </Moment>
            </div>
            <div>
                {/* change value for the link */}
                <Link to={`/code/${props.id}`}>
                    <button className="btn">view</button>
                </Link>
                <button className="btn" onClick={handleDelete}>delete</button>
            </div>
        </div>
    );
}
