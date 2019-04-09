import React from 'react';
import {withRouter} from 'react-router-dom';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const reviewsList = this.props.reviews.map(review => {
            // if (review.user_id !== this.props.currentUser.id) {
                return (
                    <ReviewIndexItem 
                    key={review.id}
                    review={review} 
                    book={this.props.book} 
                    author={this.props.users[review.user_id]}/>
                )
            // }
        });

        return (
            <div className="review-index-container">
                <div className="review-index-header-container">
                    <div className="review-index-header">COMMUNITY REVIEWS</div>
                    <div className="review-index-avg-rating">{this.props.book.avg_rating}</div>
                </div>
                <ul className="reviews-list">
                    {reviewsList}
                </ul>
            </div>
        )
    }
}

export default ReviewIndex;