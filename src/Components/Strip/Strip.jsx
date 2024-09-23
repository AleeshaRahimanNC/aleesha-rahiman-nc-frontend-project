import React from 'react';
import './Strip.css'; // Make sure to create this CSS file

const Strip = () => {
    const textToShow = Array(7).fill('WEFO STUDIO   ♦  ').join(' ');

    return (
        <div className="crossStrip">
            <div className="grey-strip"></div>
            <div className="blue-strip"></div>
            <span className="text repeating-text">
                {textToShow}
            </span>
            <span className="grey-text repeating-text">
                {textToShow}
            </span>
        </div>
    );
};

export default Strip;
