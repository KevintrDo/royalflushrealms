import React from "react";
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom';



import './Login.css';

const Login = () => {
    return (
        <div className="hdr">
            <h1>THIS LOGS U IN</h1>
            <Link to="/home">HOME</Link>
        </div>
    );
};

export default Login;