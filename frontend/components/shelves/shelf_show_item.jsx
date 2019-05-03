import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { fetchShelf } from '../../util/shelf_api_util';
import RatingStarsContainer from '../reviews/rating_stars_container';

class ShelfShowItem extends React.Component {

  constructor(props) {
    super(props);
    this.shelving = null;
    this.handleClick = this.handleClick.bind(this);
    this.myRating = null;
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.book);
    
    this.props.shelf.shelvings.forEach(shelving => {
      if (shelving.book_id === this.props.book.id) {
        this.shelving = shelving
      }
    })

    // this.props.book.shelf_books.forEach(shelf_book => {
    //   if (shelf_book.shelf_id === parseInt(this.props.shelf)) {
    //     this.shelving = shelf_book;
    //   }
    // });
  }

  handleClick() {
    this.props.deleteShelfBook(this.shelving.id)
      .then(() => {
        this.props.fetchShelf(this.props.shelf);
      });
  }

  //consider adding <br> or "," to separate shelves entries
  render() {
    const {book, shelves, reviews, currentUser} = this.props;
    
    let shelvesByBook;
    debugger
    if (Object.keys(shelves).length > 0) {
      shelvesByBook = Object.values(shelves).map(shelf => {
        if (shelf.title !== "All" && shelf.shelvedBooks.includes(book.id)) {
          return (
            <Link to={`/shelves/${shelf.id}`} className="shelf-show-link" key={shelf.id}>{shelf.title}</Link>
          )
        }
      })
    };

    return (
      <tr className="shelf-show-item">
        <td className="shelf-show-cell shelf-show-cover">
          <Link to={`/books/${this.props.book.id}`}><img src={this.props.book.volumeInfo.imageLinks ? 
          this.props.book.volumeInfo.imageLinks.thumbnail : window.phCoverSmall}/></Link>
        </td >
        <td className="shelf-show-cell shelf-show-title">
          <Link to={`/books/${this.props.book.id}`} className="shelf-show-link">{this.props.book.volumeInfo.title}</Link>
        </td>
        <td className="shelf-show-cell shelf-show-author">
          <p>{this.props.book.volumeInfo.authors ? this.props.book.volumeInfo.authors[0] : "Unknown"}</p>
        </td>
        <td className="shelf-show-cell shelf-show-avg-rating">
          {/* <div>{this.props.book.avg_rating}</div> */}
        </td>
        <td className="shelf-show-cell shelf-show-rating">
          <div className="active-shelf-rating"><RatingStarsContainer currentUser={this.props.currentUser} currentBook={this.props.book} /></div>
        </td>
        <td className="shelf-show-cell shelf-show-shelves">
          <div className="shelves-by-book">
            {shelvesByBook}
          </div>
        </td >
        <td className="shelf-show-cell shelf-show-date-added">
          <p>PH</p>
        </td >
        <td className="shelf-show-cell shelf-show-delete">
          <div className="shelf-show-delete" onClick={this.handleClick}>X</div>
        </td>
      </tr>
    )
  };

}

export default withRouter(ShelfShowItem);