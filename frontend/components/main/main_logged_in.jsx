import React from 'react';
import {withRouter} from 'react-router-dom';

const MainLoggedIn = (props) => {
  return (
    <div className="logged-in-placeholder">
      <p>Placeholder</p>
      <button onClick={props.logout}>Logout</button>
    </div>
  );
};

export default withRouter(MainLoggedIn);