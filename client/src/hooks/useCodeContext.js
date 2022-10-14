import { CodeContext } from "../context/codeContext";
import { useContext } from "react";

export const useCodeContext = () => {
    const context = useContext(CodeContext);

    if (!context) {
        throw Error("UseCodeContext must be used in an CodeContextProvider");
    }

    return context;
};
