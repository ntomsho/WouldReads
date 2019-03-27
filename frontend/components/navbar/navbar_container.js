import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import Navbar from './navbar';

const msp = ({session, entities: {users}}) => {
  return {
    currentUser: users[session.id]
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(msp, mdp)(Navbar);