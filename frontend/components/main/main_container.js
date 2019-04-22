import {connect} from 'react-redux';
import Main from './main';

const msp = ({session, entities: {users, books}}) => {
  return {
    currentUser: users[session.id],
    books: books
  };
};

export default connect(msp)(Main);