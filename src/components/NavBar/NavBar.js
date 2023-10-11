// NavBar.js
import React from 'react';
import './NavBar.css';

function NavBar({ currentPage }) {
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
                <div className="user-avatar"></div>
            </div>
            <div className="rectangle5"></div>
        </div>
    );
}

export default NavBar;
