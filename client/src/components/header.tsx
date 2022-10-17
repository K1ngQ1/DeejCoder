//Component import
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

//header unit for app navigation
export default function HeaderUnit() {
    const { user } = useAuthContext();
    return (
        <div className="navbar navbar-center bg-base-300 m-5 rounded-xl w-11/12">
            <Link to="/">
                <button className="btn btn-primary text-2xl">deejCoder</button>
            </Link>
            <Link to="/coder">
                <button className="btn btn-ghost hover:btn-secondary text-xl">
                    Coder
                </button>
            </Link>
            {/* not yet supported */}
            {/* <Link to="/guides">
                <a className="btn btn-ghost hover:btn-secondary text-xl">
                    Guides
                </a>
            </Link> */}
            {user && (
                <Link to="/profile">
                    <button className="btn btn-ghost hover:btn-secondary text-xl">
                        Profile
                    </button>
                </Link>
            )}
            {!user && (
                <Link to="/login">
                    <button className="btn btn-ghost hover:btn-secondary text-xl">
                        Login
                    </button>
                </Link>
            )}
        </div>
    );
}
