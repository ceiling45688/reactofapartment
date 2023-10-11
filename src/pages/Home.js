import React, { useState } from "react";
import "./Home.css"; // 更改样式文件的路径
import NavBar from "../components/NavBar/NavBar";
import Footer from  "../components/Footer/Footer";
import {WhatDoYouNeed} from "../components/WhatDoYouNeed/WhatDoYouNeed";
import livingroomImage from '../assets/images/livingroom.jpg';
import outsideImage from '../assets/images/outside.jpg';
import {HowItWorks} from "../components/HowItWorks/HowItWorks";

export const Home = () =>{
            // 使用useState初始化图片状态
            const [currentImage, setCurrentImage] = useState(livingroomImage);

            // 定义一个函数来处理图片切换
            const handleImageSwitch = () => {
            if (currentImage === livingroomImage) {
            setCurrentImage(outsideImage);
        } else {
            setCurrentImage(livingroomImage);
        }
        }

            return(
            <div className="home">
            <NavBar currentPage='Home'/>
            <div className="home_picture" style={{backgroundImage: `url(${currentImage})`}}>
                <div className="texts">
                    <div className="text-line1">CabbageApart</div>
                    <div className="text-line2">The best student home</div>
                    <div className="text-line3" onClick={
                        handleImageSwitch
                    }>explore more -></div>
                </div>
            {/*<WhatDoYouNeed/>*/}
            </div>

            <div className="HowItWorks_box">
                <HowItWorks/>
            </div>


            {/*RoomTour部分*/}\
            <div className="room-tour">
                <div className="subtitle">
                    <div className="subtitle_text">Room Tour</div>
                    <div className="subtitle_bar"></div>
                </div>

                <div className="home_overview">
                    <OverviewCard/>
                </div>
            </div>
            {/*Footer*/}
            <Footer/>
        </div>

    );
}


export const OverviewCard = () =>{
    return (
        <div>overcard</div>
    );
}