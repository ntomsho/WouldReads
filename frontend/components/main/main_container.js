import {connect} from 'react-redux';
import Main from './main';

const msp = ({session, entities: {users}}) => {
  return {
    currentUser: users[session.id]
  };
};

export default connect(msp)(Main);