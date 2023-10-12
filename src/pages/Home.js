import React, { useState } from "react";
import "./Home.css"; // 更改样式文件的路径
import NavBar from "../components/NavBar/NavBar";
import Footer from  "../components/Footer/Footer";
import {WhatDoYouNeed} from "../components/WhatDoYouNeed/WhatDoYouNeed";
import livingroomImage from '../assets/images/livingroom.jpg';
import outsideImage from '../assets/images/outside.jpg';
import {HowItWorks} from "../components/HowItWorks/HowItWorks";
import {BoxCard} from "../components/BoxCard/BoxCard"

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
                </div>

                <div className="WDYN_home_box">
                    <WhatDoYouNeed/>
                </div>
            <div className="HowItWorks_box">
                <HowItWorks/>
            </div>


            {/*RoomTour部分*/}
            <div className="room-tour">
                {/* Room Tour Title and Underline */}
                <div className="room-tour-header">
                    <div className="room-tour-title">Room Tour</div>
                    <div className="room-tour-underline" />
                </div>

                {/* Display Boxes */}
                <div className="display-boxes">
                    <BoxCard
                        image={outsideImage}
                        label={"Outside"}
                        position={{top:'0px'}}
                    />
                    <BoxCard
                        image={livingroomImage}
                        label={"Bronze"}
                        position={{top:'20px'}}
                    />
                    <BoxCard
                        image={livingroomImage}
                        label={"Silver"}
                        position={{top:'0px'}}
                    />
                    <BoxCard
                        image={livingroomImage}
                        label={"Gold"}
                        position={{top:'20px'}}
                    />


                </div>
            </div>
            {/*Footer*/}
            <Footer/>
        </div>

    );
}


