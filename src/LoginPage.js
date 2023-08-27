import './Login.css'; // CSS 파일을 import
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useHistory 대신 useNavigate 사용
import axios from 'axios'; // 'axios' 라이브러리를 import

function Login() {
    // 카카오 개발자 앱 키 선언
    const REST_API_KEY = "4a61ea8b549b24a89de92ba2670a39e9"; // RestAPI 키
    const REDIRECT_URI = "http://localhost:3000/kakao/callback"; // redirect 주소
    const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate(); // useNavigate 사용

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleLogin = async () => {

    };

    return (
        <div className="login-container">
            <h1 className="login-heading">Login Page</h1>
            <div className="input-container">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={handleChange}
                    className="input-field"
                />
            </div>
            <div className="input-container">
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                    className="input-field"
                />
            </div>
            <button className="login-button" onClick={handleLogin}>Login</button>
            <div className="KaKaoBtn">
                <a href={KAKAO_AUTH_URI}>카카오로 시작하기</a>
            </div>
        </div>
    );
}

export default Login;