import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage'; // 로그인 페이지 컴포넌트
import DashboardPage from './DashboardPage'; // 대시보드 페이지 컴포넌트
import MainPage from './MainPage'; // 대시보드 페이지 컴포넌트
import KakaoRedirection from './KakaoRedirection'; // 대시보드 페이지 컴포넌트

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/main" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route exact path='/kakao/callback' element={<KakaoRedirection />} />
                <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;