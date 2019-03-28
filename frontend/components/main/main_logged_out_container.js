import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions';
import MainLoggedOut from './main_logged_out';

const msp = ({errors}) => {
  return {
    errors: errors.session
  };
};

export default connect(msp)(MainLoggedOut);