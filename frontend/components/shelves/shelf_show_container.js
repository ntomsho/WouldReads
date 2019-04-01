import {connect} from 'react-redux';
import ShelfShow from './shelf_show';
import * as BookActions from '../../actions/book_actions';

const msp = ({entities}, ownProps) => {
  return {
    shelf: ownProps.match.params.shelfId,
    books: Object.keys(entities.books).map(id => entities.books[id])
  };
};

const mdp = (dispatch) => {
  return {
    fetchBooks: (shelf => dispatch(BookActions.fetchBooks(shelf)))
  };
};

export default connect(msp, mdp)(ShelfShow);