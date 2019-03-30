import React from 'react';
import {withRouter} from 'react-router-dom';
import ShelfIndexContainer from '../shelves/shelf_index_container';

const MainLoggedIn = (props) => {
  return (
    <div className="main-logged-in">
      <ShelfIndexContainer />
    </div>
  );
};

export default withRouter(MainLoggedIn);