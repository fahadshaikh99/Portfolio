import React from 'react';
import './MobileDevice.css';

export default function MobileDevice(props) {
    return (
        <div className="mobile-section">
           
            <div className="text-and-title">

                <h1>{props.appName}</h1>
                <p>Users can create account login and track their location and save rides </p>
                
            </div>
            <div className="app-image">
                <img src="https://citrusbits.com/wp-content/uploads/2020/06/acustream_Screenshots_compiled.png"/>
            </div>        
        </div>
    );
}

