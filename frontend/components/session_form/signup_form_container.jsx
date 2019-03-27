import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = ({errors}) => {
  return {
    errors: errors.session,
    formType: 'Sign up'
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user))
  };
};

export default connect(msp, mdp)(SessionForm);