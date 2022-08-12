import React from 'react';

import './Sidebar.scss';

interface Props {
    isOpen: boolean
};

const Sidebar: React.FC<Props> = (props) => {
   return (
    <div id="wrapper" className={props.isOpen ? 'toggled': ''}>
       <div id="sidebar-wrapper">
           <ul className="sidebar-nav">
               <li className="sidebar-brand">
                   <p>
                       Welcome!
                   </p>
               </li>
               <li>
                   <a href="">Dashboard</a>
               </li>
               <li>
                   <a href="">Shortcuts</a>
               </li>
               <li>
                   <a href="">Overview</a>
               </li>
               <li>
                   <a href="">Events</a>
               </li>
               <li>
                   <a href="">About</a>
               </li>
               <li>
                   <a href="">Services</a>
               </li>
               <li>
                   <a href="">Contact</a>
               </li>
           </ul>
       </div>
    </div>
   )
}; 

export default Sidebar;





