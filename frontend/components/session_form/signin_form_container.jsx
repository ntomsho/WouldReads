import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signin'
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (user) => dispatch(signin(user))
  };
};

export default connect(msp, mdp)(SessionForm);