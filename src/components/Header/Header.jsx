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
  {/* <input type="text" /> */}
  <ul>
    <li><NavLink to='/home'>Home</NavLink></li>
    
    <li><NavLink to='http://'>About</NavLink></li>
    
    <li><NavLink to='http://'>Contact Us</NavLink></li>

    {
      
      authCtx.isAuth &&(<li onClick={handleLogout} style={{float:'right', marginRight: '15px'}} ><Link to='http://'>Logout</Link></li>)
    }
  </ul>
</nav>
    );
};

export default Header;