import {connect} from 'react-redux';
import ShelfShow from './shelf_show';
import * as BookActions from '../../actions/book_actions';
import * as ShelfActions from '../../actions/shelf_actions';
import * as ReviewActions from '../../actions/review_actions';

const msp = ({session, entities}, ownProps) => {
  return {
    shelves: entities.shelves,
    shelf: entities.shelves[parseInt(ownProps.match.params.shelfId)],
    books: entities.books,
    reviews: Object.keys(entities.reviews).map(id => entities.reviews[id]),
    currentUser: entities.users[session.id]
  };
};

const mdp = (dispatch) => {
  return {
    fetchBooks: (shelf => dispatch(BookActions.fetchBooks(shelf))),
    clearBooks: (() => dispatch(BookActions.clearBooks())),
    fetchShelf: (id => dispatch(ShelfActions.fetchShelf(id))),
    fetchReviews: (book => dispatch(ReviewActions.fetchReviews(book))),
    createReview: (review => dispatch(ReviewActions.createReview(review))),
    deleteShelfBook: (shelfBookId => dispatch(BookActions.deleteShelfBook(shelfBookId)))
  };
};

export default connect(msp, mdp)(ShelfShow);