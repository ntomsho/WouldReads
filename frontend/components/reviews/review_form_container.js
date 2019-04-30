import {connect} from 'react-redux';
import ReviewForm from './review_form';
import * as ReviewActions from '../../actions/review_actions';
import * as BookActions from '../../actions/book_actions';

const msp = ({ session, entities, errors }, ownProps) => {
    return {
        currentUser: entities.users[session.id],
        currentBook: entities.books[parseInt(ownProps.match.params.id)],
        shelves: entities.shelves,
        reviews: entities.reviews,
        errors: errors.review
    }
}

const mdp = (dispatch) => {
    return {
        fetchBook: (id) => dispatch(BookActions.fetchBook(id)),
        fetchReviews: (book) => dispatch(ReviewActions.fetchReviews(book)),
        createReview: (review) => dispatch(ReviewActions.createReview(review)),
        updateReview: (review) => dispatch(ReviewActions.updateReview(review))
    }
}

export default connect(msp, mdp)(ReviewForm);