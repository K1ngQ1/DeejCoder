import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignUp = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { dispatch } = useAuthContext();

    const signup = async (userName, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch("/api/user/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userName, password }),
        });
        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            //save user token and username to local storage
            localStorage.setItem("user", JSON.stringify(json));

            //update auth context
            dispatch({ type: "LOGIN", payload: json });
            setIsLoading(false);
        }
    };

    return { signup, isLoading, error };
};
