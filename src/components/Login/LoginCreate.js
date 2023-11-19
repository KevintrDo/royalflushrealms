import React from "react";
import { Link } from 'react-router-dom'

import './Login.css';

const LoginCreate = () => {
    return (
        <div>
            <div className="hdr">
                <Link to='/'>Home</Link>
                <h1>Create your account</h1>
                <Link to='/login'>Login</Link>
            </div>
            <div class='card login'>
                <form>
                    <label>Username</label>
                    <input
                        id="username"
                        type="text"
                    />
                    <label>Email</label>
                    <input
                        id="email"
                        type="text"
                    />
                    <label>Password</label>
                    <input
                        id="password"
                        type="text"
                    />

                    <button class="buttonEdit" type="button">Create</button>
                </form>
            </div>
        </div>
    );
};

export default LoginCreate;