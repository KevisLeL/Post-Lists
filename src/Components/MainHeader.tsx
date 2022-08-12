import React from 'react';

import './MainHeader.scss';

const MainHeader: React.FC = () => {
   return <header className="main-header">
       <button className="main-header__menu-btn">
           <span />
           <span />
           <span />
       </button>
       <h1 className="main-header__title">
         CLEVERPY
       </h1>
   </header>;
}; 

export default MainHeader;