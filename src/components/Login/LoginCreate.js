import React, {useState} from "react";
import { Link } from 'react-router-dom'

import './Login.css';

const LoginCreate = () => {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredUserName, setEnteredUsername] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')

      const submitHandler = (e) => {
        e.preventDefault();
        const userData = {
            email: enteredEmail,
            username: enteredUserName,
            password: enteredPassword
        };
        console.log('form submitted', userData);
        setEnteredEmail('');
        setEnteredPassword('');
        setEnteredUsername('')
    };
    const EmailChangeHandler = (event) => {
        setEnteredEmail(event.target.value)
    }
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
                <h1>Create your account</h1>
                <Link to='/login'>Login</Link>
            </div>
            <div class='card login'>
                <form onSubmit={submitHandler}>
                    <label>Username</label>
                    <input
                        id="username"
                        type="text"
                        onChange={UsernameChangeHandler}
                        value={enteredUserName}
                    />
                    <label>Email</label>
                    <input
                        id="email"
                        type="text"
                        onChange={EmailChangeHandler}
                        value={enteredEmail}
                    />
                    <label>Password</label>
                    <input
                        id="password"
                        type="text"
                        onChange={PasswordChangeHandler}
                        value={enteredPassword}
                    />

                    <Link to='/home'><button class="buttonEdit" type="submit">Create</button></Link>
                </form>
            </div>
        </div>
    );
};

export default LoginCreate;