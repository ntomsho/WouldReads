import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import StaticStars from '../reviews/static_stars';

class BookIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.book);
  }

  render() {
    debugger
    let avgRating;
    if (this.props.reviews.length > 0) {
      let totalRating = this.props.reviews.map(review => {
        return review.rating;
      });
      avgRating = totalRating.reduce((accumulator, currentValue) => accumulator + currentValue) / this.props.reviews.length;
    } else {
      avgRating = this.props.book.volumeInfo.averageRating;
    }
    
    return (
      <li className="book-index-entry" key={this.props.book.id}>
        <Link className="book-index-cover" to={`/books/${this.props.book.id}`}> <img src={this.props.book.volumeInfo.imageLinks ? 
          this.props.book.volumeInfo.imageLinks.thumbnail : window.phCoverSmall} /> </Link>
        <div className="title-author-box">
          <Link className="book-index-title" to={`/books/${this.props.book.id}`}> {this.props.book.volumeInfo.title} </Link>
          <div className="book-index-author">
            by {this.props.book.volumeInfo.authors ? this.props.book.volumeInfo.authors[0] : "Unknown"}
          </div>
          <div className="avg-rating">
            <div className="inactive-shelf-rating">
              <StaticStars rating={avgRating} />
            </div>
            <div className="avg-rating-integer">
              {avgRating ? avgRating : "No "}
            </div>
            <div className="avg-rating-text">
              avg rating
            </div>
          </div>
        </div>
      </li>
    )
  }

}

export default withRouter(BookIndexItem);