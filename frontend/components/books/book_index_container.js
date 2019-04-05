import {connect} from 'react-redux';
import BookIndex from './book_index';
import * as BookActions from '../../actions/book_actions';
import * as ReviewActions from '../../actions/review_actions';

const msp = ({entities}) => {
  return {
    books: Object.keys(entities.books).map(id => entities.books[id]),
    reviews: Object.keys(entities.reviews).map(id => entities.reviews[id])
  };
};

const mdp = (dispatch) => {
  return {
    fetchBooks: (() => dispatch(BookActions.fetchBooks())),
    fetchReviews: ((book) => dispatch(ReviewActions.fetchReviews(book)))
  };
};

export default connect(msp, mdp)(BookIndex);