import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import MainLoggedIn from './main/main_logged_in_container';
import MainLoggedOut from './main/main_logged_out_container';
import BookShowContainer from './books/book_show_container';
import BookIndexContainer from './books/book_index_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_utils';

const App = () => (
  <div id="background-container" className="bg-inactive">
    <header>
      <NavbarContainer />
    </header>
    <Switch>
      <ProtectedRoute path="/shelves" component={MainLoggedIn} />
      <Route path="/books/:id" component={BookShowContainer} />
      <Route path="/books" component={BookIndexContainer} />
      <AuthRoute exact path="/" component={MainLoggedOut} />
    </Switch>
  </div>
);

export default App;