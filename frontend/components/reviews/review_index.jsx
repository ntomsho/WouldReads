import React from 'react';
import {withRouter} from 'react-router-dom';
import ReviewIndexItem from './review_index_item';
import StaticStars from './static_stars';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let totalRating = [];
        let avgRating;
        const reviewsList = this.props.reviews.map(review => {
            totalRating.push(review.rating);
            if (review.user_id !== this.props.currentUser.id) {
                return (
                    <ReviewIndexItem 
                    key={review.id}
                    review={review} 
                    book={this.props.book} 
                    author={this.props.users[review.user_id]}/>
                )
            }
        });
        totalRating.length > 0 ? 
        avgRating = totalRating.reduce((accumulator, currentValue) => accumulator + currentValue) / this.props.reviews.length : 
        avgRating = this.props.book.volumeInfo.averageRating;

        return (
            <div className="review-index-container">
                <div className="review-index-header-container">
                    <div className="review-index-header">COMMUNITY REVIEWS</div>
                    <div className="review-index-avg-rating">
                        <div className="inactive-shelf-rating">
                            <StaticStars rating={avgRating} />
                        </div>
                        {avgRating}
                    </div>
                </div>
                <ul className="reviews-list">
                    {reviewsList}
                </ul>
            </div>
        )
    }
}

export default ReviewIndex;