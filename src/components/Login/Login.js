import React, {useState, useContext} from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import UserContext from "../../context/UserContext";
import Alert from 'react';

import './Login.css';

const Login = () => {
    // const [enteredUserName, setEnteredUsername] = useState('')
    // const [enteredPassword, setEnteredPassword] = useState('')

      

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    // const {setUserData} = useContext(UserContext);
    
    const submitHandler = (e) => {
        // e.preventDefault();
        // const userData = {
        //     username: enteredUserName,
        //     password: enteredPassword
        // };
        // console.log('form submitted', userData);
        setPassword('');
        setEmail('')
    };
    
    // const EmailChangeHandler = (event) => {
    //     setEmail(event.target.value)
    // }

    // const UsernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value)
    // }
    // const PasswordChangeHandler = (event) => {
    //     setEnteredPassword(event.target.value)
    // }
    return (

        <div>
            <div className="hdr">
                <Link to='/'>Home</Link>
                <h1>Login Page</h1>
                {error && <Alert variant="danger">{error}</Alert>}
            </div>
            <div class='login'>
                <form onSubmit={submitHandler}>
                    <label>Email</label>
                    <input
                        id="email"
                        type="email"
                        required onChange={e => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input
                        id="password"
                        type="password"
                        required onChange={e => setPassword(e.target.value)}
                    />
                  

                    <Link to='/home'><button disabled={loading} class="buttonEdit" type="submit" >Login</button></Link>
                    <Link to='/signup'>Dont have an account? Sign up</Link>
                </form>
            </div>

        </div>
    );
};

export default Login;