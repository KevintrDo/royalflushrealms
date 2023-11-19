import React from "react";
import { Link } from 'react-router-dom'

import './Login.css';

const Login = () => {
    return (
        <div>
            <div className="hdr">
                <Link to='/'>Home</Link>
                <h1>Login Page</h1>
            </div>
            <div class='card login'>
                <form>
                    <label>Title</label>
                    <input
                        id="title"
                        type="text"
                    />
                    <label>Date</label>
                    <input
                        id="date"
                        type="text"
                    />
                    <label>Comment</label>
                    <input
                        id="comment"
                        type="text"
                    />

                    <button class="buttonEdit" type="button">Login</button>
                    <Link to='/signup'>Dont have an account? Sign up</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;