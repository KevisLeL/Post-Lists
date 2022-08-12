import React from 'react';

import './Footer.scss';

const Footer: React.FC = () => {
   return <footer className="main-footer">
    <h5 className='main-footer__text'> Cleverpy App based on jsonPlaceHolder Posts API</h5>
    <h5 className='main-footer__text--advice'>Technical Test. Some functionalities may not work as expected.</h5>
   </footer>;
}; 

export default Footer;