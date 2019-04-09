import {connect} from 'react-redux';
import RatingStars from './rating_stars';
import * as ReviewActions from '../../actions/review_actions';

const msp = ({session, entities}, ownProps) => {
    return {
        // currentUser: entities.users[session.id],
        reviews: Object.keys(entities.reviews).map(id => entities.reviews[id])
    }
}

const mdp = (dispatch) => {
    return {
        fetchReviews: (book => dispatch(ReviewActions.fetchReviews(book))),
        createReview: (review => dispatch(ReviewActions.createReview(review))),
        updateReview: (review => dispatch(ReviewActions.updateReview(review)))
    }
}

export default connect(msp, mdp)(RatingStars);