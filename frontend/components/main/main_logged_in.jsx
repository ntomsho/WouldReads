import React from 'react';
import {withRouter, Route, Switch, Redirect} from 'react-router-dom';
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
        <div className="logged-in-header-bar">
          <h3 className="logged-in-header">My Books</h3>
        </div>
        <div className="shelf-index-area">
          <ShelfIndexContainer />
          <Switch>
            <Redirect exact from="/shelves" to={`/shelves/${this.props.users[this.props.session.id].all_shelf}`}/>
            <Route path="/shelves/:shelfId" component={ShelfShowContainer} />
          </Switch>
        </div>
      </div>
    );
  }
};

export default withRouter(MainLoggedIn);