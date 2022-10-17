import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogIn = () => {
    const [errorI, setErrorI] = useState(null);
    const [isLoadingI, setIsLoadingI] = useState(false);

    const { dispatch } = useAuthContext();

    const login = async (userName, password) => {
        setIsLoadingI(true);
        setErrorI(null);

        const response = await fetch("/api/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userName, password }),
        });
        const json = await response.json();

        if (!response.ok) {
            setIsLoadingI(false);
            setErrorI(json.error);
        }
        if (response.ok) {
            //save user token and username to local storage
            localStorage.setItem("user", JSON.stringify(json));

            //update auth context
            dispatch({ type: "LOGIN", payload: json });
            setIsLoadingI(false);
        }
    };

    return { login, isLoadingI, errorI };
};
