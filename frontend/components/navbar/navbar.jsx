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

  const browseDropdown = () => {
    return (
      <div id="browse-dropdown" className="dropdown-hidden">
        <div className="browse-dropdown-genres">
          <ul className="genre-list">
            <div className="genre-list-header">FAVORITE GENRES</div>
            {GENRES.map(genre => {
              return <li key={GENRES.indexOf(genre)} className="genre-list-entry"><Link to={`/browse/${genre}`} onClick={toggleDropdown}>{genre}</Link></li>
            })}
          </ul>
        </div>
        <div className="browse-dropdown-preview">
        </div>
      </div>
    )
  }

  const toggleDropdown = () => {
    let dropdown = document.getElementById("browse-dropdown");
    dropdown.className === "dropdown-hidden" ? dropdown.className = "browse-dropdown-open" : dropdown.className = "dropdown-hidden";
  }

  const loggedInNavbar = () => {
    document.addEventListener('mousedown', (e) => {
      let dropdown = document.getElementById("browse-dropdown");
      if (dropdown && dropdown.className === "browse-dropdown-open" && !dropdown.contains(e.target)) {
        if (e.target.id !== "browse-button") {
          toggleDropdown()
        }
      }
    });
    
    return (
    <div className="navbar-loggedin-container">
      <div className="navbar-container navbar-loggedin">
          <Link className="logged-in-logo" to="/"><div className="navbar-logo-1">would</div><div className="navbar-logo-2">reads</div></Link>
        <div className="logged-in-header">
          <Link to="/shelves" className="navbar-text-button">Home</Link>
          <Link to="/shelves" className="navbar-text-button">My Books</Link>
          <div className="browse-container">
            <button id="browse-button" className="navbar-text-button navbar-dropdown" onClick={toggleDropdown}>Browse ▾</button>
            {browseDropdown()}
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