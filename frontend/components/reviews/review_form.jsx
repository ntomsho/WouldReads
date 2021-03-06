import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import RatingStarsContainer from '../reviews/rating_stars_container';

class ReviewForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            body: "",
            error: ""
        };
        this.currentReview = null;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchBook(this.props.match.params.id).then(() => {
            this.changeReview();
        })
    }

    changeReview() {
        this.props.fetchReviews(this.props.currentBook).then(() => {
            const userId = this.props.currentUser.id;
            Object.values(this.props.reviews).forEach(review => {
                if (review.user_id === userId) {
                    this.currentReview = review;
                    if (this.currentReview.body !== null) {
                        this.setState({ body: this.currentReview.body });
                    }
                }
            })
        })
    }
    
    handleSubmit(e) {
        this.props.fetchReviews(this.props.currentBook).then(() => {
            const userId = this.props.currentUser.id;
            Object.values(this.props.reviews).forEach(review => {
                if (review.user_id === userId) {
                    this.currentReview = review;
                }
            })
        }).then(() => {
            e.preventDefault();
            if (this.currentReview) {
                this.setState({errors: ""});
                this.props.updateReview({
                    id: this.currentReview.id,
                    book_id: this.props.currentBook.id,
                    body: this.state.body
                }).then(() => {
                    this.props.history.push(`/books/${this.props.currentBook.id}`)
                })
            } else {
                this.setState({error: "Enter a rating first"});
            }
        })
    }

    update() {
        return e => {
            this.setState({ body: e.currentTarget.value});
        }
    }

    renderErrors() {
        if (this.state.error === "") { 
            return (
                <>
                </>
            )
        } else {
            return (
                <ul className="errors-list review-errors-list">
                    <li key="1">
                        {this.state.error}
                    </li>
                </ul>
            );
        }
    }

    render() {
        if (this.props.currentBook != undefined) {
            const id = this.props.currentBook.id;
            const title = this.props.currentBook.volumeInfo.title;
            const author = this.props.currentBook.volumeInfo.authors[0];
            const coverUrl = this.props.currentBook.volumeInfo.imageLinks.thumbnail;
            return (
                <div className="create-review-main">
                    <div className="create-review-header">
                        <Link to={`/books/${id}`}>{title}</Link> > Review > Edit
                    </div>
                    <div className="create-review-book-info">
                        <Link className="book-index-cover" to={`/books/${id}`}> <img src={coverUrl} /> </Link>
                        <div className="book-info-title-author">
                            <Link to={`/books/${id}`} className="book-info-title">{title}</Link>
                            <div className="book-info-author">by {author}</div>
                        </div>
                    </div>
                    <div className="create-review-rating-and-shelves">
                        <div className="create-review-rating">
                            <div className="my-rating-header">My rating:</div>
                            <div className="active-shelf-rating">
                                <RatingStarsContainer currentUser={this.props.currentUser} currentBook={this.props.currentBook} />
                                <div className="review-error-container">
                                    {this.renderErrors()}
                                </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.handleSubmit} className="create-review-form">
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