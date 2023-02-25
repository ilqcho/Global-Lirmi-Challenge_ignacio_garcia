import './index.css';
import React from 'react';

const Button = ({ icon }) => {

    return(
        <div className="menu-button">
            {icon}
        </div>
    );
}

export default Button;