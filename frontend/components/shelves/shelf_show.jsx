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
      <div className = "shelf-books-item">
        {this.props.books.map(book => {
          return (
            <ShelfShowItem book={book} key={book.id} />
          )
          })
        }
      </div >
    )
  }
};

export default ShelfShow;