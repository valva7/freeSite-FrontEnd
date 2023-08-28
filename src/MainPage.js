import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = {
            message: '', // 초기 메시지 상태
            error: false, // 초기 에러 상태
            isLoading: false // 초기 로딩 상태
        };
    }

    // testAxios 함수를 클래스 메서드로 정의
    testAxios = async () => {
        axios.post('http://localhost:8080/demo/test', {},
            {
                headers: {
                    'X-AUTH-TOKEN': `${localStorage.getItem('X-AUTH-TOKEN')}`
                }
            }
        )
        .then((response) => {
            console.log(response.data);
            console.log(response.headers);
        })
        .catch((error) => {
            console.error("에러 발생:", error);
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <button className="login-button" onClick={this.testAxios}>Axios TEST</button>
                </header>
            </div>
        );
    }
}

export default App;