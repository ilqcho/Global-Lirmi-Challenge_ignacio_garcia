import React from 'react';
import './index.css';

const SwitchCards = ({ title, text, id }) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
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
                        <input type="checkbox" onChange={handleChange} checked={checked} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
            {/* <p>Is "My Value" checked? {checked.toString()}</p> */}
        </div>
    );
}

export default SwitchCards;