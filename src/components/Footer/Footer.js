// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div id="footer">
            {/* Company Info */}
            <div className="company-info">
                <div className="logotype"></div>
                <div className="social-links">
                    <div className="social-icon"></div>
                    <div className="social-icon"></div>
                    <div className="social-icon"></div>
                    <div className="social-icon"></div>
                </div>
                <div className="cabbageApart">CabbageApart</div>
                <div className="description">Providing the best apartment experiences for our customers.</div>
                <div className="copyrights">Copyrights CabbageApart 2023</div>
                <div className="rights-reserved">All rights reserved.</div>
            </div>

            {/* Links */}
            <div className="links">
                <div className="col">
                    <div className="header">Company</div>
                    <div className="list-items">
                        <a href="#">About us</a>
                        <a href="#">Contact us</a>
                    </div>
                </div>
                <div className="col">
                    <div className="header">Support</div>
                    <div className="list-items">
                        <a href="#">Help center</a>
                        <a href="#">Terms of service</a>
                        <a href="#">Legal</a>
                        <a href="#">Privacy policy</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;
