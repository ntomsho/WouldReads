import {RECEIVE_REVIEWS, RECEIVE_REVIEW} from '../actions/review_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      let newState = Object.assign({}, state);
      newState[action.review.id] = action.review;
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;