import React, {useState, useContext, useEffect} from "react";
import axios from "axios";
import {Alert} from "react-bootstrap";
import UserContext from "../../context/UserContext"
import { useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';
import LoginButton from '../Login/LoginButton';
import { useHistory } from 'react-router-dom';

import './Login.css';

const Login = () => {



    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setUserData } = useContext(UserContext);

    async function handleSubmit(e) {
        console.log("THIS IS WORKING");
        e.preventDefault();
        setLoading(true);
        try {
            const loginUser = { email, password};
            const loginRes = await axios.post("http://localhost:4000/api/users/login", loginUser)
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            navigate('/home');
        } catch(err) {
            setLoading(false);
            err.response.data.msg && setError(err.response.data.msg);
        }
    }

    return (
        <div className="loginBackground">
            <div className="loginHdr">
                <Link to='/'><button className="loginHome">Home</button></Link>
                <h1>Login Page</h1>
                <div></div>
            </div>
            <div className="login-Container">
                <div className='login'>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <form onSubmit={handleSubmit}>
                        <label>Username/Email</label>
                        <input
                            id="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Password</label>
                        <input
                            id="password"

                            type="password"
                            required
                            onChange={(e) => setPassword(e.target.value)}

                        />
                        <button disabled={loading} class="buttonEdit" type="submit" >login</button>
                        <Link disabled={loading} to='/home'></Link>
                        <Link to='/signup'>Dont have an account? Sign up</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;