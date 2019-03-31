import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import MainContainer from './main/main_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <NavbarContainer />
    <MainContainer />

    {/* <Route path="/signin" component={SigninFormContainer}/>
    <Route path="/signup" component={SignupFormContainer} /> */}
    
  </div>
);

export default App;