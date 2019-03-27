import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import SigninFormContainer from './session_form/signin_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>wouldreads</h1>
      <p>A home for all the books you *would* read, but....</p>
      <NavbarContainer/>
    </header>

    <Route path="/signin" component={SigninFormContainer}/>
    <Route path="/signup" component={SignupFormContainer} />
    <Route exact_path="/" />
  </div>
);

export default App;