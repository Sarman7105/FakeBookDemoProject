import React, { useContext} from 'react';
import { NavLink,Link,useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth';
import './Header.css'

const Header = () => {
  

  const authCtx=useContext(AuthContext)
  const history =useHistory();
  console.log("header rendering",authCtx.isAuth);
  const handleLogout=()=>{

    authCtx.setIsAuth(false);
    localStorage.removeItem('isLoggedIn')
    history.replace('/login')
    
  }
    return (
        <nav id='menu'>
  <input type='checkbox' id='responsive-menu' onclick='updatemenu()'/><label></label>
  <ul>
    <li><NavLink activeStyle={{
    fontWeight: "bold",
    color: '#d4d3d3'
  }} to='/home'>Home</NavLink></li>
    
    <li><NavLink activeStyle={{
    fontWeight: "bold",
    color: '#d4d3d3'
  }} to='http://'>About</NavLink></li>
    
    <li><NavLink activeStyle={{
    fontWeight: "bold",
    color: '#d4d3d3'
  }} to='http://'>Contact Us</NavLink></li>

    {
      
      authCtx.isAuth || localStorage.getItem('isLoggedIn') &&(<li onClick={handleLogout} id='linkRight' ><Link to="./">Logout</Link></li>)
    }
  </ul>
</nav>

    );
};

export default Header;