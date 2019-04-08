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

        return (
        <>
        <div className="my-activity-header">MY ACTIVITY</div>
        <div className="my-activity-row">
            <div className="my-activity-subheader">Rating</div>
            <div className="my-activity-content my-activity-rating active-shelf-rating"><RatingStarsContainer currentBook={book}/></div>
        </div>
        <div className="my-activity-row">
            <div className="my-activity-subheader">Shelves</div>
            <div className="my-activity-content my-activity-shelves">{shelvesByBook}</div>
        </div>
        <div className="my-activity-row">
            <div className="my-activity-subheader">Review</div>
            <div className="my-activity-content my-activity-review"><Link className="my-activity-review-link" to="">Add a review</Link></div>
        </div>
        </>
        )
    }

}

export default withRouter(BookShowMyActivity);