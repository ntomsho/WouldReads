import React from 'react';
import {Link} from 'react-router-dom';
import SigninFormContainer from '../session_form/signin_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

const Navbar = ({currentUser, logout}) => {
  
  const loggedOutNavbar = () => {
    return (
      <div className="navbar-container">
        <img src="https://s.gr-assets.com/assets/home/header_logo-8d96d7078a3d63f9f31d92282fd67cf4.png"
        className="navbar-logo" />
        <SigninFormContainer />
      </div>
    );
  };

  const loggedInNavbar = () => {
    return (
    <div className="navbar-container">
      <div className="loggedin-header">
        <h2 className="header-name">Placeholder {currentUser.username}</h2>
        <button className="header-placeholder-button" onClick={logout}>Log Out</button>
      </div>
    </div>
    );
  };

  return currentUser ? loggedInNavbar() : loggedOutNavbar();

};

export default Navbar;