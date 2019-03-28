import React from 'react';
import SignupFormContainer from '../session_form/signup_form_container';
import {withRouter} from 'react-router-dom';

const MainLoggedOut = () => {

  return (
    <div className="logged-out-masthead">
      <div className="logged-out-splash-message">
        <h3>A home for all those books that you <i>would</i> read, but...</h3>
      </div>
      <SignupFormContainer />
    </div>
  )

}

export default withRouter(MainLoggedOut);