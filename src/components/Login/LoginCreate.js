import React, {useState} from "react";
import { Link } from 'react-router-dom'

import './Login.css';

const LoginCreate = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [username], setUsername] = useState();
    const [error, setEmail] = useState();
    const [email, setEmail] = useState();
    const [email, setEmail] = useState();

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const newUser = {email, password, confirmPassword, username};

            await axios.post("http://localhost:8082/api/users/signup", newUser);
            const loginRes = await axois.post("https://localhost:8082/api/users/login", {
                email,
                password,

            });
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            setLoading(false);
            Navigate('/');
        } catch (err) {
            setLoading(false);
            err.response.data.msg && getSystemErrorMap(err.response.data.msg);
        }
        }
    
    }
    return (
        <div>
            <div className="hdr">
                <Link to='/'>Home</Link>
                <h1>Create your account</h1>
                <Link to='/login'>Login</Link>
            </div>
            <div class='card login'>
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input
                        id="username"
                        type="text"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>Email</label>
                    <input
                        id="email"
                        type="text"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                        id="password"
                        type="text"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label>Password Confirmation</label>
                    <input
                        id="password"
                        type="text"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <Link to='/home'><button class="buttonEdit" type="submit">Create</button></Link>
                </form>
            </div>
        </div>
    );
};

export default LoginCreate;