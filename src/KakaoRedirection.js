import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useHistory 대신 useNavigate 사용
import axios from 'axios'; // 'axios' 라이브러리를 import

const Redirection = () => {
    const code = window.location.search;
    const navigate = useNavigate();

    useEffect(() => {
        //localStorage.clear();
        if (code) { // localStorage에 데이터가 없을 때만 요청을 보냅니다.
            axios.post(`http://localhost:8080/login/auth/kakao/token${code}`).then((response) => {
                console.log(response.data);

                // 토큰을 받아서 localStorage같은 곳에 저장하는 코드를 여기에 쓴다.
                localStorage.setItem('access_token', response.data); // 일단 이름만 저장했다.

                navigate('/main');
            });
        }
    }, []);

    return <div>로그인 중입니다.</div>;
};

export default Redirection;