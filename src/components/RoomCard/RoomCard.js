import React from "react";
import "./RoomCard.css";

export const RoomCard = ({ roomNumber, weeklyPrice, floor, flat, roomType, imageUrl }) => {
    return (
        <div className="room-card">
            <div className="room-image" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="image-overlay" />
            </div>
            <div className="room-details">

                <div className="room-info">
                    <div className="room-number">{roomNumber}</div>
                    <p className="room-description">
                        <span className="bold-text">From {weeklyPrice} per 7 days</span>
                        <br />
                        <span className="bold-text">Flat:</span> {flat}<br />
                        <span className="bold-text">Floor:</span> {floor}<br />
                        <span className="bold-text">Room Type:</span> {roomType}
                    </p>
                </div>
                <div className="select-room">
                    <div className="select-room-bg">
                        <div className="select-room-text">Select Room</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
