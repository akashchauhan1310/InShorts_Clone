import React from "react";
import './NavInshorts.css';
import HamburgerDrawer from './HamburgerDrawer';
import Modal1 from './Modal1/Modal1'


const NavInshorts = ({setCategory}) => {
    return(
     
    <div className='nav'>
      <div className='icon'>
          <HamburgerDrawer setCategory={setCategory}/>
      </div>
    <img className='logo-img' src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' alt="logo" />
    <Modal1/>
      </div>
    )
}

export default NavInshorts