import React from 'react';
import {withRouter} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
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
    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.closeDropdownNow = this.closeDropdownNow.bind(this);
    this.open = null;
    this.close = null;
  }

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id)
    .then((action) => {
      this.props.fetchReviews(action.book)
      .then(() => {
        this.props.fetchUsers();
      });
    });
    this.props.fetchShelves(this.props.currentUser);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchBook(this.props.match.params.id)
      .then((action) => {
        this.props.fetchReviews(action.book);
      });
      this.props.fetchShelves(this.props.currentUser);
    }
  }

  componentWillUnmount() {
    this.props.clearBooks();
  }

  currentReadShelf() {
    debugger
    const user_sbi = [];
    Object.values(this.props.shelves).forEach(shelf => {
      if (shelf.shelvedBooks.includes(this.props.currentBook.id)) {
        user_sbi.push(shelf.id);
      }
    });
    return (
      <div>
        {Object.keys(this.props.shelves).map(id => this.props.shelves[id]).map (shelf => {
          if (user_sbi.includes(shelf.id) && shelf.title !== "All" && shelf.default_shelf === true) {
            return (
              <div key={shelf.id} className="default-shelf-active">
                <button className="green-check" 
                  title="Remove this book from your shelves"
                  onClick={this.removeBookFromShelf(shelf.id)}/>
                  <div className="current-shelf-title">{shelf.title}</div>
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
          if (shelf.title !== "All" && shelf.default_shelf === true && !shelf.shelvedBooks.includes(this.props.currentBook.id)) {
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
    debugger
    return e => {
      const newShelfBook = {shelf_id: shelfId,
        book_id: this.props.currentBook.id};
      this.props.createShelfBook(newShelfBook).then(() => {
        this.props.fetchShelves(this.props.currentUser);
      });
      this.closeDropdownNow();
    };
  }

  removeBookFromShelf (shelfId) {
    return e => {
      this.props.currentBook.shelf_books.map(shelving => {
        if (shelving.shelf_id === shelfId) {
          this.props.deleteShelving(shelving.id).then(() => this.props.fetchShelves(this.props.currentUser));
        }
      })
    }
  }

  toggleDropdown() {
    let dropdown = document.getElementById("read-status-dropdown");
    dropdown.className === "dropdown-hidden" ?
    dropdown.className = "dropdown-open" :
    dropdown.className = "dropdown-hidden";
  }

  openDropdown() {
    clearTimeout(this.close)
    let dropdown = document.getElementById("read-status-dropdown");
    this.open = setTimeout(() => { dropdown.className = "dropdown-open" }, 350) 
  }

  closeDropdown() {
    clearTimeout(this.open);
    let dropdown = document.getElementById("read-status-dropdown");
    this.close = setTimeout(() => { dropdown.className = "dropdown-hidden" }, 1000) 
  }

  closeDropdownNow() {
    clearTimeout(this.open);
    let dropdown = document.getElementById("read-status-dropdown");
    this.close = setTimeout(() => { dropdown.className = "dropdown-hidden" }, 1) 
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
                  {that.props.currentBook.volumeInfo.imageLinks ? <img src={that.props.currentBook.volumeInfo.imageLinks.thumbnail} /> : <p>Placeholder</p>}
                </div>
                
                <div className="book-show-read-status-area" 
                onMouseLeave={that.closeDropdown}
                >
                  <div className="book-show-read-status-container">
                    <div className="book-show-read-status-box">
                      <div className="current-read-status">{currentReadShelf}</div>
                    </div>
                    <button className="read-status-dropdown-button"
                      onClick={that.toggleDropdown}
                      onMouseEnter={that.openDropdown}>
                    </button>
                  </div>
                  <div className="dropdown-container">
                    <div id="read-status-dropdown" className="dropdown-hidden" onMouseEnter={that.openDropdown}>
                      {shelfList}
                    </div>
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
                  {that.props.currentBook.volumeInfo.title ? that.props.currentBook.volumeInfo.title : "Untitled"}
                </div>
                <div className="book-show-author">
                  <p>by {that.props.currentBook.volumeInfo.authors ? that.props.currentBook.volumeInfo.authors[0] : "Unknown"}</p>
                </div>
                <div className="avg-rating">
                  <div className="inactive-shelf-rating">
                    {/* <StaticStars rating={that.props.currentBook.avg_rating} /> */}
                  </div>
                  {/* <div className="avg-rating-integer">{that.props.currentBook.avg_rating}</div> */}
                </div>
                <div className="book-show-synopsis">
                  {that.props.currentBook.volumeInfo.description ? ReactHtmlParser(that.props.currentBook.volumeInfo.description) : "Unknown"}
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