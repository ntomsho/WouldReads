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

  const GENRES = [
    "Art", "Biography", "Business", "Children's", "Crime", "Fantasy", "Gay and Lesbian", "Graphic Novels", "Historical Fiction",
    "History", "Horror", "Humor and Comedy", "Mystery", "Paranormal", "Romance", "Science", "Science Fiction",
    "Suspense", "Sports", "Thriller", "Travel", "Young Adult"
  ]

  console.log(GENRES.length);

  const toggleDropdown = () => {
    let dropdown = document.getElementById("browse-dropdown");
    dropdown.className === "dropdown-hidden" ? dropdown.className = "browse-dropdown-open" : dropdown.className = "dropdown-hidden";
  }

  const loggedInNavbar = () => {
    return (
    <div className="navbar-loggedin-container">
      <div className="navbar-container navbar-loggedin">
          <Link className="logged-in-logo" to="/"><div className="navbar-logo-1">would</div><div className="navbar-logo-2">reads</div></Link>
        <div className="logged-in-header">
          <Link to="/shelves" className="navbar-text-button">Home</Link>
          <Link to="/shelves" className="navbar-text-button">My Books</Link>
          <button className="navbar-text-button navbar-dropdown" onClick={toggleDropdown}>Browse ▾</button>
          <div id="browse-dropdown" className="dropdown-hidden">
            <div className="browse-dropdown-genres">
              <ul className="genre-list">
                {GENRES.map(genre => {
                  return <li key={GENRES.indexOf(genre)} className="genre-list-entry">{genre}</li>
                })}
              </ul>
            </div>
            <div className="browse-dropdown-preview">
            </div>
          </div>
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