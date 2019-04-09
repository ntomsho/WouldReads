import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import RatingStarsContainer from '../reviews/rating_stars_container';

class ReviewForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            body: ""
        };
        // this.currentReview = null;
    }

    // componentDidMount() {
    //     this.props.fetchReviews(this.props.currentBook).then(() => {
    //         const userId = this.props.currentUser.id;
    //         const bookId = this.props.currentBook.id;
    //         this.props.reviews.forEach(review => {
    //             if (review.user_id === userId && review.book_id === bookId) {
    //                 this.currentReview = review;
    //                 this.setState({ body: this.currentReview.body })
    //             }
    //         })
    //     })
    // }
    
    componentDidMount() {
        this.props.fetchBook(parseInt(this.props.match.params.id)).then((action) => {
            debugger
            this.props.fetchReviews(action.book);
        })
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview({
            book_id: this.props.currentBook.id,
            body: this.state.body
        })
    }

    update() {
        return e => {
            this.setState({ body: e.currentTarget.value});
        }
    }

    render() {
        debugger
        if (this.props.currentBook != undefined) {
            const { id, title, author, coverUrl } = this.props.currentBook
            debugger
            return (
                <div className="create-review-main">
                    <div className="create-review-header">
                        <Link to={`/books/${id}`}>{title}</Link> > Review > Edit
                    </div>
                    <div className="create-review-book-info">
                        <div className="book-info-box">
                            <img className="book-info-cover" src={coverUrl} />
                            <div className="book-info-title-author">
                                <div className="book-info-title">{title}</div>
                                <div className="book-info-author">{author}</div>
                            </div>
                        </div>
                    </div>
                    <div className="create-review-rating-and-shelves">
                        <div className="create-review-rating">
                            <div className="my-rating-header">My rating:</div>
                            <RatingStarsContainer currentBook={this.props.currentBook} />
                        </div>
                    </div>
                    <form className="create-review-form">
                        <div className="create-review-form-header">What did you think?</div>
                        <textarea 
                            placeholder="Enter your review (optional)" 
                            rows="12" 
                            maxLength="20000"
                            value={this.state.body}
                            onChange={this.update()}
                        ></textarea>
                        <input type="submit" value="Save" />
                    </form>
                </div>
            )
        } else {
            return (
                <div>
                </div>
            )
        }
    }    
}

export default withRouter(ReviewForm)