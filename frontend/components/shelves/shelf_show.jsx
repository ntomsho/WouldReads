import React from 'react';
import ShelfShowItem from './shelf_show_item';

class ShelfShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.fetchShelf(parseInt(this.props.match.params.shelfId)).then(() =>
    this.props.fetchBooks(this.props.shelf.shelvedBooks.filter(book => !Object.keys(this.props.books).includes(book))));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.shelfId !== this.props.match.params.shelfId) {
      this.props.fetchBooks(this.props.shelf.shelvedBooks.filter(book => !Object.keys(this.props.books).includes(book)));
    }
  }

  render() {
    let shelfShowItems;
    if (Object.keys(this.props.books).length > 0) {
      shelfShowItems = Object.keys(this.props.books).map(id => {
        if (this.props.shelf.shelvedBooks.includes(id)) {
          return (
            <ShelfShowItem
              book={this.props.books[id]}
              key={id}
              shelf={this.props.shelf}
              shelves={this.props.shelves}
              reviews={this.props.reviews}
              deleteShelfBook={this.props.deleteShelfBook}
              currentUser={this.props.currentUser}
              fetchShelf={this.props.fetchShelf}
              fetchReviews={this.props.fetchReviews}
              createReview={this.props.createReview} />
          )
        }
      })
    }
    
    return (
      <table className = "shelf-books-list">
        <thead>
          <tr className="shelf-books-header">
            <th className="shelf-show-cover">
              cover
            </th>
            <th className="shelf-show-title">
              title
            </th>
            <th className="shelf-show-author">
              author
            </th>
            <th className="shelf-show-avg-rating">
              avg rating
            </th>
            <th className="shelf-show-rating">
              rating
            </th>
            <th className="shelf-show-shelves">
              shelves
            </th>
            <th className="shelf-show-date-added">
              date added
            </th>
          </tr>
        </thead>
        <tbody>
          {shelfShowItems}
        </tbody>
      </table>
    )
  }
};

export default ShelfShow;