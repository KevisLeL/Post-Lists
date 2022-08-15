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
                   <p>SideBar Links</p>
               </li>
               <li>
                   <p>May not</p>
               </li>
               <li>
                   <p>Redirect</p>
               </li>
               <li>
                   <p>To anywhere</p>
               </li>
               <li>
                   <p>Close Sidebar</p>
               </li>
               <li>
                   <p>by clicking</p>
               </li>
               <li>
                   <p>on the three lines</p>
               </li>
           </ul>
       </div>
    </div>
   )
}; 

export default Sidebar;





