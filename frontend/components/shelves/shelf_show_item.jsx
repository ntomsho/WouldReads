import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { fetchShelf } from '../../util/shelf_api_util';

class ShelfShowItem extends React.Component {

  constructor(props) {
    super(props);
    this.shelving = null;
    this.handleClick = this.handleClick.bind(this);
    this.myRating = null;
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.book);
    
    this.props.book.shelf_books.forEach(shelf_book => {
      if (shelf_book.shelf_id === parseInt(this.props.shelf)) {
        this.shelving = shelf_book;
      }
    });
  }

  handleClick() {
    this.props.deleteShelfBook(this.shelving.id)
      .then(() => {
        this.props.fetchShelf(this.props.shelf);
      });
  }

  handleSubmit(rating) {
    this.props.createReview({
      user_id: this.props.currentUser.id,
      book_id: this.props.book.id,
      rating: rating
    });
  }

  hover(number) {
    for (let i=parseInt(number); i > 0; i--) {
      let star = document.getElementById(i);
      star.className = "hover";
    }
  }

  unhover(number) {
    for (let i = parseInt(number); i > 0; i--) {
      let star = document.getElementById(i);
      star.className = "unhover";
    }
  }

  starRating() {
    if (this.myRating === null) {
      return (
        <div className="active-shelf-rating">
          <span id="5" onMouseEnter={() => this.hover(5)} onMouseLeave={() => this.unhover(5)} onClick={() => this.handleSubmit(5)}>
            </span>
          <span id="4" onMouseEnter={() => this.hover(4)} onMouseLeave={() => this.unhover(4)} onClick={() => this.handleSubmit(4)}>
            </span>
          <span id="3" onMouseEnter={() => this.hover(3)} onMouseLeave={() => this.unhover(3)} onClick={() => this.handleSubmit(3)}>
            </span>
          <span id="2" onMouseEnter={() => this.hover(2)} onMouseLeave={() => this.unhover(2)} onClick={() => this.handleSubmit(2)}>
            </span>
          <span id="1" onMouseEnter={() => this.hover(1)} onMouseLeave={() => this.unhover(1)} onClick={() => this.handleSubmit(1)}>
            </span>
        </div>
      )
    }
    if (this.myRating === 5) {
      return (
        <div className="shelf-rating">
          <span className="star-on"></span><span className="star-on"></span><span className="star-on"></span><span className="star-on"></span><span className="star-on"></span>
        </div>
      )
    }
    if (this.myRating === 4) {
      return (
        <div className="shelf-rating">
          <span></span><span className="star-on"></span><span className="star-on"></span><span className="star-on"></span><span className="star-on"></span>
        </div>
      )
    }
    if (this.myRating === 3) {
      return (
        <div className="shelf-rating">
          <span></span><span></span><span className="star-on"></span><span className="star-on"></span><span className="star-on"></span>
        </div>
      )
    }
    if (this.myRating === 2) {
      return (
        <div className="shelf-rating">
          <span></span><span></span><span></span><span className="star-on"></span><span className="star-on"></span>
        </div>
      )
    }
    if (this.myRating === 1) {
      return (
        <div className="shelf-rating">
          <span></span><span></span><span></span><span></span><span className="star-on"></span>
        </div>
      )
    }
  }

  render() {
    const {book, shelves, reviews, currentUser} = this.props;
    let shelvesByBook = book.shelves.map (id => {
      if (shelves[id].title !== "All") {
        return (
          <Link to={`/shelves/${id}`} className="shelf-show-link" key={shelves[id].id}>{shelves[id].title}</Link>
        );
      }
    });

    reviews.forEach((review) => {
      if (review.user_id === currentUser.id) {
        this.myRating = review.rating;
      }
    });

    const starRating = this.starRating();

    return (
      <tr className="shelf-show-item">
        <td className="shelf-show-cell shelf-show-cover">
          <Link to={`/books/${this.props.book.id}`}><img src={this.props.book.coverUrl}/></Link>
        </td >
        <td className="shelf-show-cell shelf-show-title">
          <Link to={`/books/${this.props.book.id}`} className="shelf-show-link">{this.props.book.title}</Link>
        </td>
        <td className="shelf-show-cell shelf-show-author">
          <p>{this.props.book.author}</p>
        </td>
        <td className="shelf-show-cell shelf-show-avg-rating">
          <p>PH</p>
        </td>
        <td className="shelf-show-cell shelf-show-rating">
          <div>{starRating}</div>
        </td>
        <td className="shelf-show-cell shelf-show-shelves">
          <div className="shelves-by-book">
            {shelvesByBook}
          </div>
        </td >
        <td className="shelf-show-cell shelf-show-date-added">
          <p>PH</p>
        </td >
        <td className="shelf-show-cell shelf-show-delete" onClick={this.handleClick}>
          X
        </td>
      </tr>
    )
  };

}

export default withRouter(ShelfShowItem);