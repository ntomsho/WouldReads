import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import SigninFormContainer from './session_form/signin_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import MainLoggedOutContainer from './main/main_logged_out_container';
import MainLoggedInContainer from './main/main_logged_in_container';
import MainContainer from './main/main_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const MainContent = (session) => {
  let content;
  if (session.id) {
    content = (
      <div className="main-container">
        <MainLoggedInContainer />
      </div>
    );
  } else {
    content = (
      <div className="main-container">
        <MainLoggedOutContainer />
      </div>
    );
  }
  return content;
};

const App = () => (
  <div>
    <header>
      <h1>wouldreads</h1>
      <p>A home for all the books you *would* read, but....</p>
    </header>
    <NavbarContainer />
    <div>
      <MainContainer />
    </div>

    {/* <Route path="/signin" component={SigninFormContainer}/>
    <Route path="/signup" component={SignupFormContainer} /> */}
    
  </div>
);

export default App;