import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const regisrationData = {
        username : username,
        password : password
    }
    const url = "http://localhost:4000/api/users/register";

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    

    const handleSubmit = async (e) => {
    e.preventDefault();
        
        try {
            const credentials = await axios.post('http://localhost:4000/api/users/register', regisrationData)
            localStorage.setItem("user", JSON.stringify(credentials))
            window.location.reload(false)
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div>sign up page
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                id="username"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter Username"
                />
                
                <label htmlFor="password">Password</label>
                <input 
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter Password"
                />
                <button>Register</button>
            </form>
        </div>

    )
}

export default SignUp;


