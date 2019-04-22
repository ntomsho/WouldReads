import {connect} from 'react-redux';
import {signin} from '../../actions/session_actions';
import {fetchBooks} from '../../actions/book_actions';
import MainLoggedOut from './main_logged_out';

const msp = ({entities, errors}) => {
  return {
    errors: errors.session,
    books: Object.keys(entities.books).map(id => entities.books[id])
  };
};

const mdp = (dispatch) => {
  return {
    signin: (user) => dispatch(signin(user)),
    fetchBooks: (() => dispatch(fetchBooks()))
  };
};

export default connect(msp, mdp)(MainLoggedOut);