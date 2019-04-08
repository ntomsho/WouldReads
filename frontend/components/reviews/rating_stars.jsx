import React from 'react';

class RatingStars extends React.Component {

    constructor(props) {
        super(props);
        this.state = {displayRating: null}
        this.currentReview = null;
    }

    componentDidMount() {
        this.updateRating();
    }

    updateRating() {
        this.props.fetchReviews(this.props.currentBook).then(() => {
            const userId = this.props.currentUser.id;
            const bookId = this.props.currentBook.id;
            this.props.reviews.forEach(review => {
                if (review.user_id === userId && review.book_id === bookId) {
                    this.currentReview = review;
                    this.setState({ displayRating: this.currentReview.rating })
                }
            })
        })
    }

    handleSubmit(rating) {
        if (this.currentReview === null) {
            this.props.createReview({
                user_id: this.props.currentUser.id,
                book_id: this.props.currentBook.id,
                rating: rating
            }).then(() => this.updateRating());
        } else {
            this.props.updateReview({
                id: this.currentReview.id,
                book_id: this.props.currentBook.id,
                rating: rating
            }).then(() => this.updateRating());
        }
    }

    hover(number) {
        this.setState({displayRating: number});
    }

    unhover() {
        this.currentReview ?
            this.setState({ displayRating: this.currentReview.rating })
            :
            this.setState({displayRating: null})
    }

    Star(num) {
        if (this.state.displayRating !== null) {
            return (
                this.state.displayRating < num ?
                    <span id={num} className="inactive-star" onMouseEnter={() => this.hover(num)} onMouseLeave={() => this.unhover()} onClick={() => this.handleSubmit(num)} />
                    :
                    <span id={num} className="active-star" onMouseEnter={() => this.hover(num)} onMouseLeave={() => this.unhover()} onClick={() => this.handleSubmit(num)} />
            )
        } else {
            return (
                <span id={num} className="inactive-star" onMouseEnter={() => this.hover(num)} onMouseLeave={() => this.unhover()} onClick={() => this.handleSubmit(num)} />
            )
        }
    }

    render() {
        return (
            <>
            { this.Star(5) }
            { this.Star(4) }
            { this.Star(3) }
            { this.Star(2) }
            { this.Star(1) }
            </>
        )
    }
}

export default RatingStars;