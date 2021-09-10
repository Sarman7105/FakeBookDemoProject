import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav id='menu'>
  <input type='checkbox' id='responsive-menu' onclick='updatemenu()'/><label></label>
  {/* <input type="text" /> */}
  <ul>
    <li><Link to='/home'>Home</Link></li>
    
    <li><Link to='http://'>About</Link></li>
    
    <li><Link to='http://'>Contact Us</Link></li>
  </ul>
</nav>
    );
};

export default Header;