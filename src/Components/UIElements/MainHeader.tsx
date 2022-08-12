import React from 'react';

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
      <h1 className="main-header__title">
        CLEVERPY
      </h1>
    </header>
   )
}; 

export default MainHeader;