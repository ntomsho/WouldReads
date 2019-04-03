import React from 'react';
import {withRouter, Route} from 'react-router-dom';
import ShelfIndexContainer from '../shelves/shelf_index_container';
import ShelfShowContainer from '../shelves/shelf_show_container';

class MainLoggedIn extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    const background = document.getElementById('background-container');
    background.className ='bg-inactive';
  }

  render() {
    return (
      <div className="main-logged-in">
        <ShelfIndexContainer />
        <Route path="/shelves/:shelfId" component={ShelfShowContainer} />
      </div>
    );
  }
};

export default withRouter(MainLoggedIn);