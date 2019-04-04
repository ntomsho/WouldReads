import React from 'react';
import {withRouter} from 'react-router-dom';

class BookShow extends React.Component {

  constructor(props) {
    super(props);
    this.currentReadShelf = this.currentReadShelf.bind(this);
    this.shelfList = this.shelfList.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  componentDidMount() {
    this.props.fetchBook(parseInt(this.props.match.params.id)).then((action) => {
      this.props.fetchReviews(action.book);
    });
    this.props.fetchShelves(this.props.currentUser);
  }

  currentReadShelf() {
    const user_sbi = this.props.currentBook.shelf_books.map(shelf_book => {
      return (
        shelf_book.shelf_id
      );
    });

    return (
      <div>
        {this.props.shelves.map (shelf => {
          if (user_sbi.includes(shelf.id) && shelf.title !== "All" && shelf.default_shelf === true) {
            return (
              <div key={shelf.id} className="default-shelf-active">
                {shelf.title}
              </div>
            )
          }
        })}
      </div>
    )
  }

  shelfList() {
    return (
      <ul className="read-status-dropdown-shelves">
        {this.props.shelves.map(shelf => {
          if (shelf.title !== "All" && shelf.default_shelf === true && !this.props.currentBook.shelf_books.includes(shelf.id)) {
            return (
              <li key={shelf.id} className="default-shelf-inactive" onClick={this.addBookToShelf(shelf.id)}>
                {shelf.title}
              </li>
            )
          }
          if (shelf.default_shelf === false) {
            return (
              <li key={shelf.id} className="nondefault-shelf" onClick={this.addBookToShelf(shelf.id)}>
                {shelf.title}
              </li>
            )
          }

        })}
      </ul>
    )
  }

  addBookToShelf (shelfId) {
    return e => {
      const newShelfBook = {shelf_id: shelfId,
        book_id: this.props.currentBook.id};
      this.props.createShelfBook(newShelfBook);
    };
  }

  toggleDropdown() {
    let dropdown = document.getElementById("read-status-dropdown");
    dropdown.className === "dropdown-hidden" ? 
    dropdown.className = "dropdown-open" :
    dropdown.className = "dropdown-hidden";
  }

  handleSubmit(rating) {
    this.props.createReview({
      user_id: this.props.currentUser.id,
      book_id: this.props.currentBook.id,
      rating: rating
    });
  }

  starRating() {
    if (this.myRating() === undefined) {
      return (
        <div className="rating active-rating">
          <span onClick={() => this.handleSubmit(5)}>
          <img src={window.offStar} /></span>
          <span onClick={() => this.handleSubmit(4)}>
          <img src={window.offStar} /></span>
          <span onClick={() => this.handleSubmit(3)}>
          <img src={window.offStar} /></span>
          <span onClick={() => this.handleSubmit(2)}>
          <img src={window.offStar} /></span>
          <span onClick={() => this.handleSubmit(1)}>
          <img src={window.offStar} /></span>
        </div>
      )
    }
    if (this.myRating() === 5) {
      return (
        <div className="rating">
          <span><img src={window.onStar} /></span><span><img src={window.onStar} /></span><span><img src={window.onStar} /></span><span><img src={window.onStar} /></span><span><img src={window.onStar} /></span>
        </div>
      )
    }
    if (this.myRating() === 4) {
      return (
        <div className="rating">
          <span><img src={window.offStar} /></span><span><img src={window.onStar} /></span><span><img src={window.onStar} /></span><span><img src={window.onStar} /></span><span><img src={window.onStar} /></span>
        </div>
      )
    }
    if (this.myRating() === 3) {
      return (
        <div className="rating">
          <span><img src={window.offStar} /></span><span><img src={window.offStar} /></span><span><img src={window.onStar} /></span><span><img src={window.onStar} /></span><span><img src={window.onStar} /></span>
        </div>
      )
    }
    if (this.myRating() === 2) {
      return (
        <div className="rating">
          <span><img src={window.offStar} /></span><span><img src={window.offStar} /></span><span><img src={window.offStar} /></span><span><img src={window.onStar} /></span><span><img src={window.onStar} /></span>
        </div>
      )
    }
    if (this.myRating() === 1) {
      return (
        <div className="rating">
          <span><img src={window.offStar} /></span><span><img src={window.offStar} /></span><span><img src={window.offStar} /></span><span><img src={window.offStar} /></span><span><img src={window.onStar} /></span>
        </div>
      )
    }
  }

  myRating() {
    const userId = this.props.currentUser.id;
    let tempRating;
    this.props.reviews.forEach(review => {
      if (review.user_id === userId) {
        tempRating = review.rating;
      }
    })
    return tempRating;
  }

  render() {
    const bookShow = function(props, that) {
      if (that.props.currentBook) {
        const currentReadShelf = that.currentReadShelf();
        const shelfList = that.shelfList();
        const myRating = that.myRating();
        const starRating = that.starRating();
        return (
          <div className="book-show-main">
            <div className="book-show-top">
              <div className="book-show-top-left">
                <div className="book-show-cover">
                  <img src={that.props.currentBook.coverUrl} />
                </div>
                
                <div className="book-show-read-status-container">
                  <div className="book-show-read-status-box">
                    <div className="current-read-status">{currentReadShelf}</div>
                  </div>
                  <button className="read-status-dropdown-button" onClick={that.toggleDropdown}>
                  </button>
                </div>
                <div id="read-status-dropdown" className="dropdown-hidden">
                  {shelfList}
                </div>
                
                <div className="book-show-main-rating">
                  <div className="main-rating-header">
                    Rate this book
                  </div>
                  <div className="main-rating-stars">
                    {starRating}
                  </div>
                </div>
              </div>
              <div className="book-show-top-middle">
                <div className="book-show-title">
                  {that.props.currentBook.title}
                </div>
                <div className="book-show-author">
                  <p>by {that.props.currentBook.author}</p>
                </div>
                <div className="book-show-avg-rating">
                  Placeholder
                </div>
                <div className="book-show-synopsis">
                  {that.props.currentBook.synopsis}
                </div>
              </div>
              <div className="book-show-top-right">
                <div className="book-show-recs-header">
                </div>
                <div className="book-show-recs">
                </div>
              </div>
            </div>
          </div>
        )
      }
    }

    return (
      <>
        {bookShow(this.props, this)}
      </>
    )
  }
}

export default withRouter(BookShow);