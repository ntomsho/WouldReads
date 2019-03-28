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
      <div className="logged-in-header">
        <h2 className="header-name">Placeholder {currentUser.username}</h2>
        <button className="logout-button" onClick={logout}>Logout</button>
      </div>
    </div>
    );
  };

  return currentUser ? loggedInNavbar() : loggedOutNavbar();

};

export default Navbar;