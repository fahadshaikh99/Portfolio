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
                    <img src="https://www.pngmart.com/files/8/Apple-iPhone-PNG-Pic-Background.png" />
                </div>
                <div className="github-icon">
                    <img src="https://pcapplusplus.github.io/resources/logo-github-invert.png" />
                </div>
            </div>
        </div>
    );
}