import { useEffect } from "react";
import CodeViewer from "./codeViewer";
import { useCodeContext } from "../../hooks/useCodeContext";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function ProfilePage() {
    //context declaration
    const { code, dispatch } = useCodeContext();

    //logout hook declaration
    const { logout } = useLogout();

    //auth context user declaration
    const { user } = useAuthContext();

    //function to search and send user's code to the front end from the db
    useEffect(() => {
        const fetchCode = async () => {
            const response = await fetch("/api/code", {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: "SET_CODE", payload: json });
            }
        };
        //check to see if user is logged in otherwise the useEffect just ignores the requests and reruns when told to do by array in end of useEffect
        if (user) {
            fetchCode();
        }
    }, [dispatch, user]);

    //function to log users out, also clears the dispatch
    const logOutSubmit = () => {
        logout();
    };

    return (
        <>
            <div className="">
                <h2 className="text-3xl text-primary">
                    {user && user.userName}
                </h2>
            </div>
            <br />
            <div>
                <h1 className="text-xl">Your saved projects:</h1>
                <br />
            </div>
            <div>
                {code &&
                    code.map((item: any) => (
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
                <Link to="/">
                    <button className="btn" onClick={logOutSubmit}>
                        Log Out
                    </button>
                </Link>
            </div>
        </>
    );
}
