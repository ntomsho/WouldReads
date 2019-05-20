import React from 'react';
import BookIndexItem from './book_index_item';

class BookIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBooksByGenre(this.props.match.params.genre);
  }

  componentWillUnmount() {
    this.props.clearBooks();
  }

  render() {

    const booksList = this.props.books.map(book => {
      return (
        <BookIndexItem book={book} key={book.id} reviews={this.props.reviews} fetchReviews={this.props.fetchReviews} />
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