import React from 'react';
import {Link} from 'react-router-dom';
import SigninFormContainer from '../session_form/signin_form_container';
import SearchContainer from '../search/search_container';

const Navbar = ({currentUser, logout}) => {
  
  const loggedOutNavbar = () => {
    return (
      <div className="navbar-container navbar-loggedout">
        <Link className="logo" to="/"><div className="navbar-logo-1">would</div><div className="navbar-logo-2">reads</div></Link>
        <SigninFormContainer />
      </div>
    );
  };

  const loggedInNavbar = () => {
    return (
    <div className="navbar-loggedin-container">
      <div className="navbar-container navbar-loggedin">
          <Link className="logged-in-logo" to="/"><div className="navbar-logo-1">would</div><div className="navbar-logo-2">reads</div></Link>
        <div className="logged-in-header">
          <Link to="/shelves" className="navbar-text-button">Home</Link>
          <Link to="/shelves" className="navbar-text-button">My Books</Link>
          <Link to="/books" className="navbar-text-button navbar-dropdown">Browse</Link>
          <SearchContainer />
          <Link to="/" className="logout-button-container"><button className="logout-button" onClick={logout}>Logout</button></Link>
        </div>
      </div>
    </div>
    );
  };

  return currentUser ? loggedInNavbar() : loggedOutNavbar();

};

export default Navbar;