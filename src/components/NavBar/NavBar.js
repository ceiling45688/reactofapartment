// NavBar.js
import React, { useState }from 'react';
import './NavBar.css';
import userIcon from "../../assets/images/user.svg";

import axios from 'axios'

function NavBar({ currentPage, onLogin }) {
    const [isLogged, setIsLogged] = useState(false); // 登录状态
    const [showDropdown, setShowDropdown] = useState(false); // 显示下拉菜单
    const [showPopup, setShowPopup] = useState(false); // 显示弹出框
    const [isLoginMode, setIsLoginMode] = useState(true); // 登录或注册模式

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8081/login', {
                email: email,
                password: password
            });
            const token = response.headers['Authorization'].split(' ')[1];
            localStorage.setItem('token', token);
            setIsLogged(true);
            setShowPopup(false);
        } catch (error) {
            console.error("Login failed: ", error);
            // 显示错误消息给用户
        }
    };

    return (
        <div className="navbar">
            <div className="rectangle4">
                <div className="logo">
                    <span className="cabbage">Cabbage</span>
                    <span className="apart">Apart</span>
                </div>
                {/*这里跳转链接还没做*/}
                <div className="links">
                    <a href="/" className={currentPage === 'Home' ? 'active' : ''}>Home</a>
                    <a href="/booking" className={currentPage === 'Booking a room' ? 'active' : ''}>Booking a room</a>
                    <a href="/contact" className={currentPage === 'Contact Us' ? 'active' : ''}>Contact Us</a>
                </div>
                <div className="user-avatar" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                    <img src={userIcon} alt="User" />
                    {showDropdown && !isLogged &&
                    <div className="dropdown-menu">
                        <button onClick={() => {setIsLoginMode(true); setShowPopup(true);}}>Login</button>
                        <button onClick={() => {setIsLoginMode(false); setShowPopup(true);}}>Register</button>
                    </div>
                    }
                </div>
                {showPopup &&
                <div className="auth-popup">
                    {isLoginMode ?
                        <>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button onClick={handleLogin}>Login</button>
                        </>
                        :
                        <>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Register</button>
                        </>
                    }
                    <button onClick={() => setShowPopup(false)}>Close</button>
                </div>
                }

            </div>
            <div className="rectangle5"></div>
        </div>
    );
}

export default NavBar;
