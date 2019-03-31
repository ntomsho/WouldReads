import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import MainLoggedIn from './main_logged_in';

const msp = ({errors}) => {
  return {
    errors: errors.session
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(msp, mdp)(MainLoggedIn);