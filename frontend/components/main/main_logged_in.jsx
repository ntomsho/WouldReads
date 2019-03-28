import React from 'react';
import {withRouter} from 'react-router-dom';
import ShelfIndexContainer from '../shelves/shelf_index_container';

const MainLoggedIn = (props) => {
  return (
    <div className="logged-in-placeholder">
      <p>Placeholder</p>
      <ShelfIndexContainer />
    </div>
  );
};

export default withRouter(MainLoggedIn);