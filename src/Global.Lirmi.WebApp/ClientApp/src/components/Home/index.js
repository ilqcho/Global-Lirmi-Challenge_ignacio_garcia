import React from 'react';
import './index.css';
import AddIcon from '@mui/icons-material/Add';
import Button from '../Button';
import ExperienceCards from '../ExperienceCards';
import experienceData from '../../Data/experienceData';
import switchData from '../../Data/switchData';
import Main from '../Main';
import SwitchCards from '../SwitchCards'

const Home = () => {

    const experienceCards = experienceData.map((card, i) => 
        <div key={i} className="mt-3 d-flex justify-content-between">
            <p className="card-index">{i + 1}</p>
            <div className="w-90">
                <ExperienceCards title={card.title} text={card.text} time={card.time} showIcon={card.showIcon} />
            </div>
        </div>
    );

    const switchCards = switchData.map((card, i) => 
        <div key={i}>
            <SwitchCards id={card.id} title={card.title} text={card.text} />
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
                    <Main />    
                </div>
                <div className="col-md-3 aside-bg pl-3">
                    {switchCards}
                    {/* <SwitchCards title="Ayuda antes de responder" text="Pistas" />  */}
                </div>
            </div>
        </div>
    );
}

export default Home;