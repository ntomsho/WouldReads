import React from 'react';
import SignupFormContainer from '../session_form/signup_form_container';
import {withRouter} from 'react-router-dom';

const MainLoggedOut = () => {

  return (
    <div className="logged-out-subheader">
      <div className="logged-out-splash-message">
        <h3>Meet your next favorite book.</h3>
      </div>
      <SignupFormContainer />
    </div>
  )

}

export default withRouter(MainLoggedOut);