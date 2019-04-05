import React from 'react';
import SignupFormContainer from '../session_form/signup_form_container';
import {withRouter} from 'react-router-dom';

class MainLoggedOut extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const background = document.getElementById('background-container');
    background.className ='bg-active';
  }

  render() {
    return (
      <div className="logged-out-masthead">
          <div className="logged-out-masthead-container">
          <div className="logged-out-splash-message">
            <h3>A home for all those books that you <i>would</i> read, but...</h3>
          </div>
          <div className="sign-up-area">
            <SignupFormContainer />
            <button className="demo-user-button" onClick={() => {
              this.props.signin({ username: 'Nicolas Cage', email: 'wild@heart.com', password: 'notthebees' })
              .then(() => this.props.history.push(`/shelves`))
              }}>Or sign in as a demo user</button>
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(MainLoggedOut);