import React from 'react';
import './index.css';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '../Button';

const NavMenu = () => {

  return (
    <header>
      <nav className="nav-container">
        <div>
          <p className="return-text color-highlight"><ArrowBackIosIcon className="return-icon"/> Física 3º Primaria</p>
          <h1 className="title mt-2">Características de los seres vivos</h1>
        </div>
        <div className="d-flex align-items-baseline">
          <div className="d-flex">
            <CloudDoneOutlinedIcon className="color-muted"/> 
            <small className="muted-text color-muted">Todos los cambios guardados</small>
          </div>
          <Button icon={ <MoreVertIcon /> } />
        </div>
      </nav>
    </header>
  );
}

export default NavMenu;
