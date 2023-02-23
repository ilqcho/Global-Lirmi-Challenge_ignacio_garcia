import React from 'react';
import './index.css';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const NavMenu = () => {

  return (
    <header>
      {/* <nav className="p-4 d-flex justify-content-between navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"> */}
      <nav className="nav-container">
        <div>
          <p className="return-text"><ArrowBackIosIcon className="return-icon"/> Física 3º Primaria</p>
          <h1 className="title">Características de los seres vivos</h1>
        </div>
        <div className="d-flex align-items-baseline">
          <div class="d-flex">
            <CloudDoneOutlinedIcon className="cloud-icon"/> 
            <small className="muted-text">Todos los cambios guardados</small>
          </div>
          <div className="menu-container">
            <MoreVertIcon className="menu-icon"/>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavMenu;
