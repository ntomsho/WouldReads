import React from 'react';
import SignupFormContainer from '../session_form/signup_form_container';
import {withRouter} from 'react-router-dom';

const MainLoggedOut = (props) => {

  return (
    <div className="logged-out-masthead">
      <div className="logged-out-splash-message">
        <h3>A home for all those books that you <i>would</i> read, but...</h3>
      </div>
      <div className="sign-up-area">
        <SignupFormContainer />
        <button className="demo-user-button" onClick={() => props.signin({ username: 'Nicolas Cage', email: 'wild@heart.com', password: 'notthebees' })}>Or sign in as a demo user</button>
      </div>
    </div>
  )

}

export default withRouter(MainLoggedOut);