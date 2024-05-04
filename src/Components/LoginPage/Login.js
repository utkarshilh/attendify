import axios from 'axios';
import React, { useState } from 'react';
import './Login.css'; // Import CSS file for styling

const Login = (props) => {
    console.log("this is props from  login " + JSON.stringify(props));
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('teacher');

    async function handleLogin(e) {
        e.preventDefault();



        try {
            const response = await axios.post('http://localhost:5001/login', { username, password, userType }, { timeout: 5000 });
            console.log("this is " + JSON.stringify(response))
            props.changeUser("0532", "admin");
            // Handle response here, such as setting authentication state
        } catch (error) {
            console.log("this is error from frontend" + error);

            alert(error);
        }


    }

    return (
        <div className="container">
            <div className="login-card">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label><br />
                        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label><br />
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="userType">User Type:</label><br />
                        <select id="userType" value={userType} onChange={(e) => setUserType(e.target.value)}>
                            <option value="teacher">Teacher</option>
                            <option value="admin">Admin</option>
                            <option value="student">Student</option>
                        </select>
                    </div>

                    <button type="submit" className="btn-login">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
