import React from 'react';
import {Link} from 'react-router-dom';
import SigninFormContainer from '../session_form/signin_form_container';

const Navbar = ({currentUser, logout}) => {
  
  const loggedOutNavbar = () => {
    return (
      <div className="navbar-container">
        <Link to="/"><img src={window.logoURL}
          className="navbar-logo" /></Link>
        <SigninFormContainer />
      </div>
    );
  };

  const loggedInNavbar = () => {
    return (
    <div className="navbar-container">
        <Link to="/"><img src={window.logoURL}
          className="navbar-logo" /></Link>
<<<<<<< HEAD
      <div className="loggedin-header">
        <h2 className="header-name">Placeholder {currentUser.username}</h2>
=======
      <div className="logged-in-header">
        <h2 className="header-name">Placeholder {currentUser.username}</h2>
        <button className="logout-button" onClick={logout}>Logout</button>
>>>>>>> f9f5f011a7598d2e07cddb7ad02e6062c60be57a
      </div>
    </div>
    );
  };

  return currentUser ? loggedInNavbar() : loggedOutNavbar();

};

export default Navbar;