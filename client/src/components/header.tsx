import React from "react";

//Component import
import { Link } from "react-router-dom";

interface state {
    loggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<any>>;
}
export default function HeaderUnit(props: state) {
    return (
        <div className="navbar navbar-center bg-base-300 m-5 rounded-xl w-11/12">
            <Link to="/">
                <button className="btn btn-ghost hover:btn-primary text-2xl">
                    deejCoder
                </button>
            </Link>
            <Link to="/coder">
                <button className="btn btn-ghost hover:btn-secondary text-xl">
                    Coder
                </button>
            </Link>
            {/* <Link to="/guides">
                <a className="btn btn-ghost hover:btn-secondary text-xl">
                    Guides
                </a>
            </Link> */}
            <Link to="/profile">
                {props.loggedIn ? 
                (<button className="btn btn-ghost hover:btn-secondary text-xl">
                Profile
            </button>) : (<button className="btn btn-ghost hover:btn-secondary text-xl">
                    Login
                </button>)}
            </Link>
            <button
                className="btn btn-secondary"
                onClick={() => {
                    props.setLoggedIn(!props.loggedIn);
                }}
            >
                Log in change
            </button>
        </div>
    );
}
