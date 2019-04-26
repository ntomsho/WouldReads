import {connect} from 'react-redux';
import BookShow from './book_show';
import * as BookActions from '../../actions/book_actions';
import * as ShelfActions from '../../actions/shelf_actions';
import * as ReviewActions from '../../actions/review_actions';
import * as UserActions from '../../actions/user_actions';

const msp = ({session, entities}, ownProps) => {
  return {
    currentUser: entities.users[session.id],
    currentBook: entities.books[parseInt(ownProps.match.params.id)],
    // shelves: Object.keys(entities.shelves).map(id => entities.shelves[id]),
    shelves: entities.shelves,
    reviews: Object.keys(entities.reviews).map(id => entities.reviews[id]),
    users: entities.users
  };
};

const mdp = (dispatch) => {
  return {
    fetchBook: (id => dispatch(BookActions.fetchBook(id))),
    fetchShelves: (user => dispatch(ShelfActions.fetchShelves(user))),
    createShelfBook: (shelfBook => dispatch(BookActions.createShelfBook(shelfBook))),
    deleteShelfBook: (shelfBookId => dispatch(BookActions.deleteShelfBook(shelfBookId))),
    deleteShelving: (shelfBookId => dispatch(BookActions.deleteShelving(shelfBookId))),
    fetchReviews: (book => dispatch(ReviewActions.fetchReviews(book))),
    createReview: (review => dispatch(ReviewActions.createReview(review))),
    fetchUsers: (() => dispatch(UserActions.fetchUsers()))
  };
};

export default connect(msp,mdp)(BookShow);