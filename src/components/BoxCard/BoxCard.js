import React from 'react';
import './BoxCard.css';

export const BoxCard = ({ image, label, position }) => {
    return (
        <div className="box" style={{top: position?.top }}>
            <div className="rectangle" style={{ backgroundImage: `url(${image})` }} >
                <div className="text-wrapper">{label}</div>
            </div>
        </div>
    );
}


