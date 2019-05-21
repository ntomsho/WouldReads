import React from 'react';
import BookIndexItem from './book_index_item';

class BookIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.clearBooks()
    this.props.fetchBooksByGenre(this.props.match.params.genre);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.genre !== this.props.match.params.genre) {
      this.props.fetchBooksByGenre(this.props.match.params.genre);
    }
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