//What Do You Need component
import React, {useState} from 'react';
import './WhatDoYouNeed.css'


export const WhatDoYouNeed = ({ onSearch }) => {
    const [roomType, setRoomType] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    // filter后续再改

    const handleSearchClick = () => {
        if (onSearch) {
            onSearch(roomType, startDate, endDate);
        }
    };

    return (

            <div className="WDYN-box">
                <h2>WHAT DO YOU NEED?</h2>
                <div className="input-group">
                    <div className="input-wrapper">
                        <label htmlFor="roomType" className="input-label">Select a Room</label>
                        <select className="room-type" id="roomType">
                            <option value="" disabled selected>Select a RoomType</option>
                            <option value="bronze">Bronze</option>
                            <option value="silver">Silver</option>
                            <option value="gold">Gold</option>
                        </select>
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="startDate" className="input-label">Start Date</label>
                        <input type="date" className="start-date" id="startDate" />
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="endDate" className="input-label">End Date</label>
                        <input type="date" className="end-date" id="endDate" />
                    </div>
                </div>
                <button className="search-btn" onClick={handleSearchClick}>Search</button>
            </div>

    );
};