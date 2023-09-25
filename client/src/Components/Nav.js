import React, {useState, useContext} from "react";
import { BrowserRouter, Link } from "react-router-dom";
import ThemeContext from "../ThemeContext";
import UserContext from "../context/UserContext";
// import SignUp from "./SignUp";

const Nav = () => {

    const color = useContext(ThemeContext);

    const user = useContext(UserContext);

    const handleLogOut = () => {
        if(localStorage.getItem("user")){
            localStorage.removeItem("user");
            window.location.reload(false)
        }
    }


    return (<div className="navi">
        <h1>Media Database</h1>
        {user === null ? '' : <h2>Welcome {user.data.res.username}!</h2>}
        <div>
        <Link to='/search'>Search for Media</Link>
        </div>
        <div className="col-sm-3">
        <Link to='/'>Return to Home</Link>
        </div>
        {user === null ? (
            <>
                <div>
                <Link to="/signup">Register</Link> 
                </div>
                <div>
                <Link to="/login">Login</Link> 
                </div>
            </>
        ) : <Link to="/" onClick={handleLogOut}>Log Out</Link>}
          
    </div>)
}

export default Nav;

