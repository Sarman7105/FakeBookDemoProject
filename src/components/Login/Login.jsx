import React, { useState, useEffect, useContext } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth';
import { useHistory, useLocation } from 'react-router';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const authContext=useContext(AuthContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);


  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authContext.setIsAuth(true);
    localStorage.setItem('isLoggedIn',1)
    history.replace(from);

  };
 

  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginContainerInner}>

      <div className={classes.loginText}>
          <h2>FakeBook</h2>
      </div>

      <div className={classes.loginForm}>
        <Card className={classes.login}>
          
          <form onSubmit={submitHandler}>
            <div
              className={`${classes.control} ${
                emailIsValid === false ? classes.invalid : ''
              }`}
            >
              
              <input
                type="email"
                id="email"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
                placeholder="Enter Your Email"
              />
            </div>
            <div
              className={`${classes.control} ${
                passwordIsValid === false ? classes.invalid : ''
              }`}
            >
              <input
                type="password"
                id="password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
                placeholder="Password"
              />
            </div>
            <div className={classes.actions}>
              <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                Login
              </Button>
            </div>
          </form>
          
          </Card>  
      </div>

      </div>
      
    
    </div>
  );
};

export default Login;
