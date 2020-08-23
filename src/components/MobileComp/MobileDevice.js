import React from 'react';
import './MobileDevice.css';

export default function MobileDevice(props) {

    
    return (
        <div className="mobile-section">

            <div className="app-image">
                <img src={props.imagePath} />        
            </div> 
        </div>
    );
}

