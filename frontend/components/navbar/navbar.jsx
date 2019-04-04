import React from 'react';
import {Link} from 'react-router-dom';
import SigninFormContainer from '../session_form/signin_form_container';

const Navbar = ({currentUser, logout}) => {
  
  const loggedOutNavbar = () => {
    return (
      <div className="navbar-container navbar-loggedout">
        <Link to="/"><img src={window.logoURL}
          className="navbar-logo logo-logged-out" /></Link>
        <SigninFormContainer />
      </div>
    );
  };

  const loggedInNavbar = () => {
    return (
    <div className="navbar-container navbar-loggedin">
        <Link to="/"><img src={window.logoURL}
          className="navbar-logo logo-logged-in" /></Link>
      <div className="logged-in-header">
        <Link to="/shelves" className="navbar-text-button">Home</Link>
        <Link to="/shelves" className="navbar-text-button">My Books</Link>
        <Link to="/books" className="navbar-text-button navbar-dropdown">Browse</Link>
        <Link to="/" className="logout-button-container"><button className="logout-button" onClick={logout}>Logout</button></Link>
      </div>
    </div>
    );
  };

  return currentUser ? loggedInNavbar() : loggedOutNavbar();

};

export default Navbar;