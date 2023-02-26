import React from 'react';
import './index.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Select from '../Select';

const ExperienceCards = ({ title, text, time, showIcon }) => { 

    return(
        <div 
            className="card-container p-3" 
        >
            <div className="d-flex justify-content-between h-50">
                <h6 className="card-title w-75">{title}</h6>
                {showIcon && <MoreVertIcon />}
            </div>
            <p className="card-text h-25">{text}</p>
            <div className="d-flex justify-content-between align-items-baseline h-25 mt-2">
                <p className="card-time">{time}</p>
                <Select />
            </div>
        </div>
    );
}

export default ExperienceCards;