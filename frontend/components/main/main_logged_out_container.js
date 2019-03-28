import {connect} from 'react-redux';
import {signin} from '../../actions/session_actions';
import MainLoggedOut from './main_logged_out';

const msp = ({errors}) => {
  return {
    errors: errors.session
  };
};

const mdp = (dispatch) => {
  return {
    signin: (user) => dispatch(signin(user))
  };
};

export default connect(msp, mdp)(MainLoggedOut);