import {connect} from 'react-redux';
import ShelfShow from './shelf_show';
import * as BookActions from '../../actions/book_actions';
import * as ShelfActions from '../../actions/shelf_actions';

const msp = ({entities}, ownProps) => {
  return {
    shelf: ownProps.match.params.shelfId,
    shelves: entities.shelves,
    books: Object.keys(entities.books).map(id => entities.books[id])
  };
};

const mdp = (dispatch) => {
  return {
    fetchBooks: (shelf => dispatch(BookActions.fetchBooks(shelf))),
    fetchShelf: (id => dispatch(ShelfActions.fetchShelf(id))),
    deleteShelfBook: (shelfBookId => dispatch(BookActions.deleteShelfBook(shelfBookId)))
  };
};

export default connect(msp, mdp)(ShelfShow);