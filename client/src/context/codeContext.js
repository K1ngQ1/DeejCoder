import { createContext, useReducer } from "react";

export const CodeContext = createContext();

//reducer switch construction
export const codeReducer = (state, action) => {
    switch (action.type) {
        case "SET_CODE":
            return {
                code: action.payload,
            };
        case "CREATE_CODE":
            return {
                code: [action.payload, ...state.code],
            };
        case "DELETE_CODE":
            return {
                code: state.code.filter((c) => c._id !== action.payload._id),
            };
        default:
            return state;
    }
};

export const CodeContextProvider = ({ children }) => {
    //reducer construction
    const [state, dispatch] = useReducer(codeReducer, {
        code: null,
    });
    //this is used in the index.js to wrap the whole application
    return (
        <CodeContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CodeContext.Provider>
    );
};
