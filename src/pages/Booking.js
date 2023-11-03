import React,{ useState, useEffect }  from "react";
import "./Booking.css"; // 更改样式文件的路径
import NavBar from "../components/NavBar/NavBar";
import {WhatDoYouNeed} from "../components/WhatDoYouNeed/WhatDoYouNeed";
import {RoomCard} from "../components/RoomCard/RoomCard";
import Footer from  "../components/Footer/Footer";

import axios from 'axios'
// 引入图片资源
// import rectangle4 from '../assets/rectangle-4.svg';
// ... 其他图片资源

// booking页面主要包括 booking容器下的 room-tour
// room-tour includes available-rooms and filter
export const Booking = () => {
    const [rooms, setRooms] = useState([]); // 存储房间数据的状态
    const [error, setError] = useState(null); // 存储可能的错误消息

    useEffect(() => {
        // 当组件加载时，发送GET请求获取所有可用的房间
        axios.get('http://localhost:8081/available')
            .then(response => {
                console.log('Available rooms data:', response.data); // 打印数据

                setRooms(response.data); // 更新房间数据状态
            })
            .catch(error => {
                console.error("Error fetching available rooms:", error);
                setError("Unable to fetch available rooms. Please try again later."); // 设置错误消息状态
            });
    }, []);

    const fetchRooms = (roomType, startDate, endDate) => {
        // 这里我们只使用了roomType作为示例
        axios.post('http://localhost:8081/apartments/rooms/filtered', {
            roomType: roomType,
            startDate: startDate,
            endDate: endDate
        })
            .then(response => {
                console.log('Filtered rooms data:', response.data); // 打印数据

                setRooms(response.data); // 更新房间数据状态
            })
            .catch(error => {
                console.error("Error fetching filtered rooms:", error);
            });
    };




    return (
        // 外层div .booking
        <div className="booking">

            <div className="div">

                {/*hero部分，页眉navbar和搜索框*/}
                <div className="hero">
                    <div className="overlap">
                        <div className="rectangle" />

                        {/*Navbar部分！这里直接用组件*/}
                        <NavBar currentPage="Booking a room"/>

                        {/*whatdoyouneed搜索框*/}
                        <div className="WDYN-out-box">
                            <WhatDoYouNeed onSearch={fetchRooms}/>
                        </div>
                    </div>
                </div>

                <div className="booking-room-tour">
                    {/*filter*/}
                    <div className="filter-container">
                        <div className="filter-content">
                            <div className="filter-button">
                                <div className="filter-text">Filter</div>
                                <div className="filter-bar"></div>
                            </div>
                            <div className="filter-section flats-section">
                                <div className="section-header">Flats</div>
                                <div className="floor-list">
                                    <label>
                                        <input type="checkbox" name="floor" value="1" />
                                        Floor 1
                                    </label>
                                    <label>
                                        <input type="checkbox" name="floor" value="2" />
                                        Floor 2
                                    </label>
                                    <label>
                                        <input type="checkbox" name="floor" value="3" />
                                        Floor 3
                                    </label>
                                    <label>
                                        <input type="checkbox" name="floor" value="4" />
                                        Floor 4
                                    </label>
                                    <label>
                                        <input type="checkbox" name="floor" value="5" />
                                        Floor 5
                                    </label>
                                    <label>
                                        <input type="checkbox" name="floor" value="6" />
                                        Floor 6
                                    </label>
                                </div>
                            </div>
                            <div className="filter-section room-types-section">
                                <div className="section-header">Room Types</div>
                                <div className="room-type-list">
                                    <label>
                                        <input type="checkbox" name="roomType" value="Bronze" />
                                        Bronze
                                    </label>
                                    <label>
                                        <input type="checkbox" name="roomType" value="Silver" />
                                        Silver
                                    </label>
                                    <label>
                                        <input type="checkbox" name="roomType" value="Gold" />
                                        Gold
                                    </label>
                                </div>
                            </div>
                            <div className="search-button">
                                Search
                            </div>
                        </div>
                    </div>


                    {/*房间列表*/}
                    {/*注意后面这里要改成动态的*/}

                    <div className="available-rooms">
                        {rooms.length > 0 && rooms.map(room => (
                            <div className="room" key={room.id}>

                                <RoomCard
                                    roomNumber={room.apartment.apartmentNumber + "." + room.roomNumber}
                                    weeklyPrice={250} // 固定的价格
                                    floor={room.floor} //
                                    flat={room.apartment.apartmentNumber}
                                    roomType={room.type}
                                    imageUrl={require("../assets/images/outside.jpg")}
                                />
                            </div>
                        ))}
                    </div>

                </div>

                {/*PageButton 后边链接数据库*/}
                <div className="pagination">
                    <button>
                        Previous
                    </button>
                    <button>
                        Next
                    </button>
                </div>

                {/*/!*PageButton*!/*/}
                {/*<div className="pagination">*/}
                    {/*<button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>*/}
                        {/*Previous*/}
                    {/*</button>*/}
                    {/*<button onClick={() => setCurrentPage(prev => prev + 1)}>*/}
                        {/*Next*/}
                    {/*</button>*/}
                {/*</div>*/}

                {/*Footer部分*/}
                <Footer/>
            </div>
            {error && <div className="error-message">{error}</div>} {/* 显示错误消息 */}
        </div>

    );
}
export default Booking;



//
// <div className="room">
//     <RoomCard
//         roomNumber="Room 1.1"
//         weeklyPrice="€267.00"
//         floor="Floor 1"
//         flat="Apartment 1"
//         roomType="Bronze Ensuite"
//         imageUrl={require("../assets/images/outside.jpg")}
//     />
// </div>
// <div className="room">
//     <RoomCard
// roomNumber="Room 1.2"
// weeklyPrice="€267.00"
// floor="Floor 1"
// flat="Apartment 1"
// roomType="Bronze Ensuite"
// imageUrl={require("../assets/images/outside.jpg")}
// />
// </div>
// <div className="room">
//     <RoomCard
// roomNumber="Room 19.5"
// weeklyPrice="€275.00"
// floor="Floor 5"
// flat="Apartment 19"
// roomType="Silver Ensuite"
// imageUrl={require("../assets/images/outside.jpg")}
// />
// </div>
// <div className="room">
//     <RoomCard
// roomNumber="Room 19.6"
// weeklyPrice="€275.00"
// floor="Floor 5"
// flat="Apartment 19"
// roomType="Silver Ensuite"
// imageUrl={require("../assets/images/outside.jpg")}
// />
// </div>
// <div className="room">
//     <RoomCard
// roomNumber="Room 20.1"
// weeklyPrice="€285.00"
// floor="Floor 6"
// flat="Apartment 20"
// roomType="Gold Ensuite"
// imageUrl={require("../assets/images/outside.jpg")}
// />
// </div>
// <div className="room">
//     <RoomCard
// roomNumber="Room 20.2"
// weeklyPrice="€285.00"
// floor="Floor 6"
// flat="Apartment 20"
// roomType="Gold Ensuite"
// imageUrl={require("../assets/images/outside.jpg")}
// />
// </div>
// <div className="room">
//     <RoomCard
// roomNumber="Room 20.3"
// weeklyPrice="€285.00"
// floor="Floor 6"
// flat="Apartment 20"
// roomType="Gold Ensuite"
// imageUrl={require("../assets/images/outside.jpg")}
// />
// </div>