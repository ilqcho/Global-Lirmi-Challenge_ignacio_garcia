import React, {useState} from 'react';
import './index.css';
import states from '../../Data/states';

const Select = () => {
    const [selected, setSelected] = useState(1)

    const showOptions = states.map((state) =>
        <option key={state.id} value={state.id}>{state.name}</option>
    );

    const handleChange = (e) =>{
        setSelected(e.target.value);
    }
    
    let className = 'select-container';

    if(selected == 1){
        className += ' active-bg'
    } else if(selected == 2){
        className += ' validate-bg'
    }else if(selected == 3){
        className += ' delete-bg'
    }else{
        className += ' inactive-bg'
    }

    return(
        <div>
            <select
                onChange={e => handleChange(e)}
                className={className}
                >
                {showOptions}
            </select>
        </div>
    );
}

export default Select;