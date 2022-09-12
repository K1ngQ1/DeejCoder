import React from "react";

//Component import
import { Link } from "react-router-dom";

interface state {
    loggedIn: boolean;
}
export default function HeaderUnit(props: state) {
    return (
        <div className="navbar navbar-center bg-base-300 m-5 rounded-xl w-11/12">
            <Link to="/">
                <a className="btn btn-ghost hover:btn-primary text-2xl">
                    deejCoder
                </a>
            </Link>
            <Link to="/coder">
                <a className="btn btn-ghost hover:btn-secondary text-xl">
                    Coder
                </a>
            </Link>
            <Link to="/guides">
                <a className="btn btn-ghost hover:btn-secondary text-xl">
                    Guides
                </a>
            </Link>
            <Link to="/profile">
                {props.loggedIn ? 
                (<a className="btn btn-ghost hover:btn-secondary text-xl">
                Profile
            </a>) : (<a className="btn btn-ghost hover:btn-secondary text-xl">
                    Login
                </a>)}
            </Link>
        </div>
    );
}
