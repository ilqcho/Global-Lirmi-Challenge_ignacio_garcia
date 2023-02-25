import React from 'react';
import './index.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Main = () => {
    return(
        <>
            <div className="d-flex flex-column">
                <input className="main-border input-md" type="text" placeholder="Nombre de la actividad"/>
                <div className="main-border input-md mt-2 color-muted">
                    Recurso
                </div>
                <textarea className="main-border input-lg mt-2" placeholder="Enunciado"></textarea>
            </div>
            <div className="main-border d-flex flex-column mt-4">
                <label className="text-muted select-label">Actividad</label>
                <div className="main-border select-md mt-2 w-33 select position-between">
                    Selección múltiple
                    <KeyboardArrowDownIcon className="color-highlight" />
                </div>  
                <div className="position-between mt-3">
                    <PanoramaFishEyeIcon className="circle-icon" />
                    <input className="main-border input-md w-90 ml-3 mr-3" type="text" placeholder="Alternativa 1"/>
                    <MoreVertIcon className="color-highlight" />
                </div>
                <div className="position-between mt-3">
                    <PanoramaFishEyeIcon className="circle-icon" />
                    <input className="main-border input-md w-90 ml-3 mr-3" type="text" placeholder="Alternativa 2"/>
                    <MoreVertIcon className="color-highlight" />
                </div>
                <div className="position-between mt-3">
                    <PanoramaFishEyeIcon className="circle-icon" />
                    <input className="main-border input-md w-90 ml-3 mr-3" type="text" placeholder="Alternativa 3"/>
                    <MoreVertIcon className="color-highlight" />
                </div>
            </div>
        </>
    );
}

export default Main;