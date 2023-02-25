import React, {useState} from 'react';
import './index.css';
import AddIcon from '@mui/icons-material/Add';
import Button from '../Button';
import ExperienceCards from '../ExperienceCards';
import experienceData from '../../Data/experienceData';
import switchData from '../../Data/switchData';
import Main from '../Main';
import SwitchCards from '../SwitchCards'

const Home = () => {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);

    const experienceCards = experienceData.map((card, i) => 
        <div key={i} className="mt-3 d-flex justify-content-between">
            <p className="card-index">{i + 1}</p>
            <div className="w-90">
                <ExperienceCards title={card.title} text={card.text} time={card.time} showIcon={card.showIcon} />
            </div>
        </div>
    );
    
    const handleAction = (isChecked, id) => {
        if(id === 1){
            setIsChecked1(isChecked);
        }
        if(id === 2){
            setIsChecked2(isChecked);
        }
        if(id === 3){
            setIsChecked3(isChecked);
        }
    }

    const showBorder = (isChecked1 || isChecked2 || isChecked3);

    const switchCards = switchData.map((card, i) => 
        <div key={i}>
            <SwitchCards id={card.id} title={card.title} text={card.text} onAction={handleAction} />
        </div>
    );


    
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-2 aside-bg pt-3 pb-3">
                    <div className="position-between aside-container">
                        <h3 className="aside-title">Experiencias</h3>   
                        <Button icon={ <AddIcon /> } />
                    </div>
                    <div>
                        {experienceCards}
                    </div>
                </div>
                <div className="col-md-7 p-4">
                    <Main showBorder={showBorder} showTracks={isChecked1} showSolver={isChecked2} showCustomMsg={isChecked3} />    
                </div>
                <div className="col-md-3 aside-bg pl-3">
                    {switchCards}
                </div>
            </div>
        </div>
    );
}

export default Home;