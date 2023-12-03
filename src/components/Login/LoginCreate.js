import React, {useState, useContext} from "react";
import { useNavigate} from 'react-router-dom';
import UserContext from '../../context/UserContext';
import axios from 'axios';
import { Link } from 'react-router-dom'

import './Login.css';

const LoginCreate = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [username, setUsername] = useState();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setUserData } = useContext(UserContext);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const newUser = {email, password, confirmPassword, username};
            await axios.post("http://localhost:4000/api/users/signup", newUser);
            const loginRes = await axios.post("http://localhost:4000/api/users/login", {
                email,
                password,
            });
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            setLoading(false);
            navigate('/');
        } catch (err) {
            setLoading(false);
            err.response.data.msg && setError(err.response.data.msg);
        }
    }

    return (
        <div className="mainHdrOutBackground">
            <div className="loginHdr">
                <Link to='/'><button className="loginHome">Home</button></Link>
                <h1>Create your account</h1>
                <Link to='/login'><button className="MainHdrOutmy-button-logout">Login</button></Link>
            </div>
            <div className="login-Container">
                <div className='login'>
                    <form onSubmit={handleSubmit}>
                        <label>Username</label>
                            <input
                                id="name"
                                required
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label>Email</label>
                            <input
                                id="email"
                                type="email"
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
                           <label>Password Confirmation</label>
                            <input
                                id="password"
                                type="password"
                                required
                                onChange={(e) => setConfirmPassword(e.target.value)}
                           />
                        <Link to='/home'><button class="buttonEdit" type="submit">Create</button></Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginCreate;