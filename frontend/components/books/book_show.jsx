import React from 'react';
import {withRouter} from 'react-router-dom';
import BookShowMyActivity from './book_show_my_activity';
import RatingStarsContainer from '../reviews/rating_stars_container';
import ReviewIndex from '../reviews/review_index';
import StaticStars from '../reviews/static_stars';

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
        {Object.keys(this.props.shelves).map(id => this.props.shelves[id]).map (shelf => {
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
        {Object.keys(this.props.shelves).map(id => this.props.shelves[id]).map(shelf => {
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

  openDropdown() {
    let dropdown = document.getElementById("read-status-dropdown");
    setTimeout(() => { dropdown.className = "dropdown-open" }, 300) 
  }

  closeDropdown() {
    let dropdown = document.getElementById("read-status-dropdown");
    setTimeout(() => { dropdown.className = "dropdown-hidden" }, 1000) 
  }

  render() {
    const bookShow = function(props, that) {
      if (that.props.currentBook) {
        const currentReadShelf = that.currentReadShelf();
        const shelfList = that.shelfList();
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
                  <button className="read-status-dropdown-button"
                    onClick={that.toggleDropdown}
                    onMouseEnter={that.openDropdown}
                    onMouseLeave={that.closeDropdown}>
                  </button>
                </div>
                <div className="dropdown-container">
                  <div id="read-status-dropdown" className="dropdown-hidden" onMouseLeave={that.closeDropdown}>
                    {shelfList}
                  </div>
                </div>
                
                <div className="book-show-main-rating">
                  <div className="main-rating-header">
                    Rate this book
                  </div>
                  <div className="main-rating-stars">
                    <div className="active-shelf-rating">
                      <RatingStarsContainer currentUser={that.props.currentUser} currentBook={that.props.currentBook} />
                    </div>
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
                <div className="avg-rating">
                  <div className="inactive-shelf-rating">
                    <StaticStars rating={that.props.currentBook.avg_rating} />
                  </div>
                  <div className="avg-rating-integer">{that.props.currentBook.avg_rating}</div>
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
            <div className="book-show-my-activity">
              <BookShowMyActivity 
                book={that.props.currentBook} 
                user={that.props.currentUser}
                shelves={that.props.shelves}
                reviews={that.props.reviews} />
            </div>
            <div className="book-show-community-reviews">
              <ReviewIndex
                book={that.props.currentBook} 
                currentUser={that.props.currentUser}
                reviews={that.props.reviews}
                users={that.props.users}/>
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