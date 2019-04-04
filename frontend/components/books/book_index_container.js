import {connect} from 'react-redux';
import BookIndex from './book_index';
import * as BookActions from '../../actions/book_actions';

const msp = ({entities}) => {
  return {
    books: Object.keys(entities.books).map(id => entities.books[id])
  };
};

const mdp = (dispatch) => {
  return {
    fetchBooks: (() => dispatch(BookActions.fetchBooks()))
  };
};

export default connect(msp, mdp)(BookIndex);