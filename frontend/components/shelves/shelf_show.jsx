import React from 'react';
import ShelfShowItem from './shelf_show_item';

class ShelfShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBooks(this.props.shelf);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.shelfId !== this.props.match.params.shelfId) {
      this.props.fetchBooks(this.props.shelf);
    }
  }

  render() {
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
          {this.props.books.map(book => {
            return (
              <ShelfShowItem book={book} key={book.id} />
            )
            })
          }
        </tbody>
      </table>
    )
  }
};

export default ShelfShow;