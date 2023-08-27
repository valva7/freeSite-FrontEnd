import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainPage from './MainPage'; // 메인 페이지 컴포넌트
import LoginPage from './LoginPage'; // 로그인 페이지 컴포넌트
import KakaoRedirection from './KakaoRedirection'; // 카카로 로그인 리다이렉트 페이지 컴포넌트

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/main" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route exact path='/kakao/callback' element={<KakaoRedirection />} />
                <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;