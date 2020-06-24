import React from 'react';

const Header = () => {
    return( 
    <div style={{ marginLeft: '500px'}}>
        <div class="ui secondary  menu">
            <a class="active item">
                Home
            </a>
            <a class="item">
                Messages
            </a>
            <a class="item">
                Friends
            </a>
        </div>
    </div>
    
    );
}

export default Header;