import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import RatingStarsContainer from './rating_stars_container';

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="review-index-entry" key={this.props.review.id}>
                <div className="review-index-entry-info">
                    <div className="review-index-author">{this.props.author.username}</div>
                    <div className="review-index-rating">
                        <div className="rated-it">rated it</div>
                        <div className="active-shelf-rating">
                            <RatingStarsContainer currentUser={this.props.author} currentBook={this.props.book} />
                        </div>
                    </div>
                </div>
                <div className="review-index-body">{this.props.review.body}</div>
            </li>
        )
    }
}

export default withRouter(ReviewIndexItem);