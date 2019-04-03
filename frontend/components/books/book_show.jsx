import React from 'react';
import {withRouter} from 'react-router-dom';

class BookShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
    this.props.fetchShelves(this.props.currentUser);
  }
  
  // readStatusDropdown() {
    
  // }

  addBookToShelf (shelfId) {
    return e => {
      const newShelfBook = {shelf_id: shelfId,
        book_id: this.props.currentBook.id};
      this.props.createShelfBook(newShelfBook);
    };
  }

  render() {
    const bookShow = () => {
      if (this.props.currentBook) {
        return (
          <div className="book-show-main">
            <div className="book-show-top">
              <div className="book-show-top-left">
                <div className="book-show-cover">
                  <img src={this.props.currentBook.coverUrl} />
                </div>
                
                <div className="book-show-read-status-container">
                  <div className="book-show-read-status-box">
                    <div className="current-read-status">Read Status</div>
                  </div>
                  <button className="read-status-dropdown-button">
                  </button>
                </div>
                <div className="read-status-dropdown">
                  <ul className="read-status-dropdown-shelves">
                    {this.props.shelves.map(shelf => {
                      if (shelf.title !== "All") {
                        return (
                          <li key={shelf.id} onClick={this.addBookToShelf(shelf.id)}>
                            {shelf.title}
                          </li>
                        )
                      }
                    })}
                  </ul>
                </div>
                
                <div className="book-show-main-rating">
                </div>
              </div>
              <div className="book-show-top-middle">
                <div className="book-show-title">
                  {this.props.currentBook.title}
                </div>
                <div className="book-show-author">
                  <p>by {this.props.currentBook.author}</p>
                </div>
                <div className="book-show-avg-rating">
                  Placeholder
                </div>
                <div className="book-show-synopsis">
                  {this.props.currentBook.synopsis}
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
        {bookShow()}
      </>
    )
  }
}

export default withRouter(BookShow);