import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class BookIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="book-index-entry" key={this.props.book.id}>
        <Link className="book-index-cover" to={`/books/${this.props.book.id}`}> <img src={this.props.book.coverUrl} /> </Link>
        <div className="title-author-box">
          <Link className="book-index-title" to={`/books/${this.props.book.id}`}> {this.props.book.title} </Link>
          <div className="book-index-author">
            by {this.props.book.author}
          </div>
        </div>
      </li>
    )
  }

}

export default withRouter(BookIndexItem);