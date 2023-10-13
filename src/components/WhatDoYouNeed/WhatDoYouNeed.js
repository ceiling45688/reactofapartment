//What Do You Need component
import React from 'react';
import './WhatDoYouNeed.css'

export const WhatDoYouNeed = () => {
    return (

            <div className="WDYN-box">
                <h2>WHAT DO YOU NEED?</h2>
                <div className="input-group">
                    <select className="room-type">
                        <option value="" disabled selected>Select a RoomType</option>
                        <option value="bronze" >Bronze</option>
                        <option value="silver">Silver</option>
                        <option value="gold">Gold</option>
                    </select>
                    <div className="date-input-wrapper">
                        <input type="date" className="start-date" id="startDate" />
                        <label htmlFor="startDate" className="date-placeholder">Start Date</label>
                    </div>

                    <div className="date-input-wrapper">
                        <input type="date" className="end-date" id="endDate" />
                        <label htmlFor="endDate" className="date-placeholder">End Date</label>
                    </div>
                </div>
                <button className="search-btn">Search</button>
            </div>

    );
};