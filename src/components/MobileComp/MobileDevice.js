import React from 'react';
import './MobileDevice.css';

export default function MobileDevice() {
    return (
        <div className="mobile-section">
            <div className="title-app">
                <h1>Tracking App</h1>
                <div className="app-details">
                    <h4>
                    Created Tracking app in react native using maps API, nodejs and mongodb. 
                    </h4>
                </div>
                <div className="device-style">
                    <img src="https://mockuphone.com/static/images/devices/apple-iphone7-silver-portrait.png" />
                </div>
            </div>
        </div>
    );
}