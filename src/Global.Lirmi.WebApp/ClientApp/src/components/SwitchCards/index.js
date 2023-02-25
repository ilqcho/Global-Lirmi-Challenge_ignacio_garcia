import React from 'react';
import './index.css';

const SwitchCards = ({ id, title, text, onAction }) => {

    const handleChange = (e) => {
        const isChecked = e.target.checked;
        onAction(isChecked, id);
    };

    return(
        <div className="card-border pt-3 pb-4">
            <h3 className="card-title">{title}</h3>
            <div className="position-between mt-3">
                <div className="card-text">
                    {text}
                </div>
                <div>
                    <label className="switch">
                        <input type="checkbox" onChange={handleChange} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default SwitchCards;