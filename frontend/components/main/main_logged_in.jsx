import React from 'react';
import {withRouter, Route} from 'react-router-dom';
import ShelfIndexContainer from '../shelves/shelf_index_container';
import ShelfShowContainer from '../shelves/shelf_show_container';

const MainLoggedIn = (props) => {
  return (
    <div className="main-logged-in">
      <ShelfIndexContainer />
      <Route path="/shelves/:shelfId" component={ShelfShowContainer} />
    </div>
  );
};

export default withRouter(MainLoggedIn);