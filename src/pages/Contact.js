import React from "react";
import "./Contact.css"; // 更改样式文件的路径
import NavBar from "../components/NavBar/NavBar";
import Footer from  "../components/Footer/Footer";

export const Contact = () => {
    return(
        <div className="contact">
            <NavBar currentPage='Contact Us'/>

            <div className="contact-content">
                <h1>Contact Us</h1>
                <p>TestSupportAgent@Gmail.com</p>
            </div>

            <Footer/>
        </div>
    );
}