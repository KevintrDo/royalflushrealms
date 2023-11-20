import React, {useState} from "react";

import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom';

import './Login.css';

const Login = () => {
    const [enteredUserName, setEnteredUsername] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')

      const submitHandler = (e) => {
        e.preventDefault();
        const userData = {
            username: enteredUserName,
            password: enteredPassword
        };
        console.log('form submitted', userData);
        setEnteredPassword('');
        setEnteredUsername('')
    };
    const UsernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }
    const PasswordChangeHandler = (event) => {
        setEnteredPassword(event.target.value)
    }
    return (

        <div>
            <div className="hdr">
                <Link to='/'>Home</Link>
                <h1>Login Page</h1>
            </div>
            <div class='login'>
                <form onSubmit={submitHandler}>
                    <label>Username</label>
                    <input
                        id="username"
                        type="text"
                        onChange={UsernameChangeHandler}
                        value={enteredUserName}
                    />
                    <label>Password</label>
                    <input
                        id="password"
                        type="text"
                        onChange={PasswordChangeHandler}
                        value={enteredPassword}
                    />
                  

                    <Link to='/home'><button class="buttonEdit" type="submit" >Login</button></Link>
                    <Link to='/signup'>Dont have an account? Sign up</Link>
                </form>
            </div>

        </div>
    );
};

export default Login;