import React from 'react';
import BookIndexItem from './book_index_item';

class BookIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {

    const booksList = this.props.books.map(book => {
      return (
        <BookIndexItem book={book} key={book.id} />
      )
    });

    return (
      <div className = "book-index-container" >
        <ul className="books-list">
          {booksList}
        </ul>
      </div>
    )
  }

}

export default BookIndex;