import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const fetchReviews = (book) => dispatch => {
  return ReviewApiUtil.fetchReviews(book).then(reviews => dispatch(receiveReviews(reviews)));
};

export const fetchReview = (id) => dispatch => {
  return ReviewApiUtil.fetchReview(id).then(review => dispatch(receiveReview(review)));
};

export const createReview = (review) => dispatch => {
  return ReviewApiUtil.createReview(review)
  .then(review => dispatch(receiveReview(review)),
  (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const updateReview = (review) => dispatch => {
  return ReviewApiUtil.updateReview(review).then(review => dispatch(receiveReview(review)));
}

export const receiveReviews = (reviews) => {
  return ({
    type: RECEIVE_REVIEWS,
    reviews
  });
};

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});