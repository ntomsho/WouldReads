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
      <div className="logged-out-main-container">
        <div className="logged-out-masthead">
            <div className="logged-out-masthead-container">
            <div className="logged-out-splash-message">
              <h3>A home for all those books that you <i>would</i> read, but won't.</h3>
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
        <div className="logged-out-bottom">
          <div className="logged-out-bottom-container">
            <div className="logged-out-col">
                <div className="col-header">
                  <h2>Want to read but never do?
                    <br/>
                  </h2>
                </div>
                <div className="col-content">
                  <p>Join the club. Literally! Find the books you like, add them to your shelves, and bask in the glory of unearned literary accomplishment.</p>
                </div>
            </div>
            <span className="col-divider"></span>
            <div className="logged-out-col">
                <div className="col-header">
                  <h2>What are your friends not reading?</h2>
                </div>
                <div className="col-content">
                  <p>Put reviews in for books that you've never read and see what your fellow pseudo-literati think.</p>
                </div>
            </div>
          </div>
        </div>
        <div className="logged-out-discover-container">
          <div className="logged-out-discover">
            <div className="discover-header">
                  <h2>What would <i>you</i> read?</h2>
            </div>
            <div className="discover-leadin">
                  <p>You know, like, if you had the time and all...</p>
            </div>
            <div className="discover-list">
                  
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(MainLoggedOut);