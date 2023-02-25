import React from 'react';
import './index.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Select from '../Select';

const ExperienceCards = ({ id, title, text, time, showIcon }) => { 

    return(
        <div className="card-container p-3">
            <div className="d-flex justify-content-between mb-1">
                <h6 className="card-title w-75">{title}</h6>
                {showIcon && <MoreVertIcon />}
            </div>
            <p className="card-text color-muted mt-2">{text}</p>
            <div className="d-flex justify-content-between align-items-baseline mt-3">
                <p className="card-time color-muted">{time}</p>
                <Select />
            </div>
        </div>
    );
}

export default ExperienceCards;