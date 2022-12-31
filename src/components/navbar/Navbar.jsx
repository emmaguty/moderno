import React from 'react'; 
import './navbar.css';
//Icons
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';

//BEM -> Block Element Modified

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links-logo'>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar