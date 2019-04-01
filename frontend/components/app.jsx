import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import MainLoggedIn from './main/main_logged_in_container';
import MainLoggedOut from './main/main_logged_out_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_utils';

const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <Switch>
      <ProtectedRoute path="/shelves" component={MainLoggedIn} />
      <AuthRoute exact path="/" component={MainLoggedOut} />
    </Switch>
    {/* <Route path="/signin" component={SigninFormContainer}/>
    <Route path="/signup" component={SignupFormContainer} /> */}
    
  </div>
);

export default App;