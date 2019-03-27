import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = ({currentUser, logout}) => {
  
  const sessionLinks = () => {
    return (
      <nav className="login-signup">
        <Link to="/login">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    );
  };

  const loggedNavbar = () => {
    <div className="loggedin-header">
      <h2 className="header-name">Placeholder {currentUser.username}</h2>
      <button className="header-placeholder-button" onClick={logout}>Log Out</button>
    </div>
  }

  return currentUser ? loggedNavbar() : sessionLinks();

};

export default Navbar;