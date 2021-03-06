import React from 'react';
import MainLoggedOutContainer from './main_logged_out_container';
import MainLoggedInContainer from './main_logged_in_container';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.content = null;
  }

  render() {
    if (this.props.currentUser) {
      this.content = (<div className="main-masthead">
        <MainLoggedInContainer />
      </div>)
    } else {
      this.content = (<div className="main-masthead">
        <MainLoggedOutContainer />
      </div>)
    }

    return (
      <div>
        {this.content}
      </div>
    );
  }

}

export default Main;