import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const useAuthContext = () => {
    const context = useContext(AuthContext)


    if(!context) {
        throw Error('fwefwefef')
    }

    return context;
}