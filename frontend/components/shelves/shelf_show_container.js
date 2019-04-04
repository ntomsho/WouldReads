import {connect} from 'react-redux';
import ShelfShow from './shelf_show';
import * as BookActions from '../../actions/book_actions';
import * as ShelfActions from '../../actions/shelf_actions';
import * as ReviewActions from '../../actions/review_actions';

const msp = ({session, entities}, ownProps) => {
  return {
    shelf: ownProps.match.params.shelfId,
    shelves: entities.shelves,
    books: Object.keys(entities.books).map(id => entities.books[id]),
    reviews: Object.keys(entities.reviews).map(id => entities.reviews[id]),
    currentUser: entities.users[session.id]
  };
};

const mdp = (dispatch) => {
  return {
    fetchBooks: (shelf => dispatch(BookActions.fetchBooks(shelf))),
    fetchShelf: (id => dispatch(ShelfActions.fetchShelf(id))),
    fetchReviews: (book => dispatch(ReviewActions.fetchReviews(book))),
    deleteShelfBook: (shelfBookId => dispatch(BookActions.deleteShelfBook(shelfBookId)))
  };
};

export default connect(msp, mdp)(ShelfShow);