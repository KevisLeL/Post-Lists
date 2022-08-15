import React from 'react';
import {Link} from 'react-router-dom'
import './MainHeader.scss';

interface Props {
  onToggleSidebar: Function
}

const MainHeader: React.FC<Props> = (props) => {
  return (
    <header className="main-header">
      <button className="main-header__menu-btn" onClick={(evt) => props.onToggleSidebar(evt)}>
        <span />
        <span />
        <span />
      </button>
      <Link  to='/homePage'>
        <h1 className="main-header__title">CLEVERPY</h1>
      </Link>
    </header>
   )
}; 

export default MainHeader;