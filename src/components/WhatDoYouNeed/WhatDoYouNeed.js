//What Do You Need component
import React from 'react';
import './WhatDoYouNeed.css'

export const WhatDoYouNeed = () => {
    return (

            <div className="WDYN-box">
                <h2>WHAT DO YOU NEED?</h2>
                <div className="input-group">
                    <select className="room-type">
                        <option value="bronze">Bronze</option>
                        <option value="silver">Silver</option>
                        <option value="gold">Gold</option>
                    </select>
                    <input type="date" className="start-date" placeholder="Start Date" />
                    <input type="date" className="end-date" placeholder="End Date" />
                </div>
                <button className="search-btn">Search</button>
            </div>

    );
};