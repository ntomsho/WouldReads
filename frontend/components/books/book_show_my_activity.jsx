import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import RatingStarsContainer from '../reviews/rating_stars_container';

class BookShowMyActivity extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {book, shelves, reviews, user} = this.props;

        let shelvesByBook;
        if (Object.keys(shelves).length > 0) {
            shelvesByBook = book.shelves.map(id => {
                if (shelves[id].title !== "All") {
                    return (
                        <Link to={`/shelves/${id}`} className="shelf-show-link" key={shelves[id].id}>{shelves[id].title}</Link>
                    );
                }
            });
        }

        let myReview;
        if (Object.keys(reviews).length > 0) {
            let haveReview = false;
            myReview = reviews.map(review => {
                if (review.user_id == user.id && review.book_id === book.id && review.body != undefined) {
                    haveReview = true
                    return (
                        <div key={review.id}>
                            <div className="my-activity-review-body">{review.body}</div>
                            <Link className="my-activity-review-link" to={`/books/${book.id}/reviews`}>see review</Link>
                        </div>
                    )
                }
            })
            if (haveReview === false) {
                myReview = <Link className="my-activity-review-link" to={`/books/${book.id}/reviews`}>Add a review</Link>
            }
        } else {
            myReview = <Link className="my-activity-review-link" to={`/books/${book.id}/reviews`}>Add a review</Link>
        }

        return (
        <>
        <div className="my-activity-header">MY ACTIVITY</div>
        <div className="my-activity-row">
            <div className="my-activity-subheader">Rating</div>
            <div className="my-activity-content my-activity-rating active-shelf-rating"><RatingStarsContainer currentUser={user} currentBook={book}/></div>
        </div>
        <div className="my-activity-row">
            <div className="my-activity-subheader">Shelves</div>
            <div className="my-activity-content my-activity-shelves">{shelvesByBook}</div>
        </div>
        <div className="my-activity-row">
            <div className="my-activity-subheader">Review</div>
            <div className="my-activity-content my-activity-review">{myReview}</div>
        </div>
        </>
        )
    }

}

export default withRouter(BookShowMyActivity);