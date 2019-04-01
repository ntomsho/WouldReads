import React from 'react';
import {withRouter} from 'react-router-dom';
<<<<<<< HEAD

const MainLoggedIn = (props) => {
  return (
    <div className="logged-in-placeholder">
      <p>Placeholder</p>
      <button onClick={props.logout}>Logout</button>
=======
import ShelfIndexContainer from '../shelves/shelf_index_container';

const MainLoggedIn = (props) => {
  return (
    <div className="main-logged-in">
      <ShelfIndexContainer />
>>>>>>> f9f5f011a7598d2e07cddb7ad02e6062c60be57a
    </div>
  );
};

export default withRouter(MainLoggedIn);