import { createContext, useReducer } from "react";

export const AuthContext = createContext()

export const reducer = (state, action) => {
    switch (action.type) {
        //scenario 1:
        case 'LOGIN':
            return { user: action.payload}

        //scenario 2:
        case 'LOGOUT':
            return {user: null}
        default:
            return state;
    }
}

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {
        user: null
    })

    console.log("AuthContext state: ", state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}