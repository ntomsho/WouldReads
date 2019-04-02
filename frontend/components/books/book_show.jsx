import React from 'react';
import {withRouter} from 'react-router-dom';

class BookShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
  }

  render() {
    const bookShow = () => {
      if (this.props.book) {
        return (
          <div className="book-show-main">
            <div className="book-show-top">
              <div className="book-show-top-left">
                <div className="book-show-cover">
                </div>
                <div className="book-show-read-status-box">
                </div>
                <div className="book-show-main-rating">
                </div>
              </div>
              <div className="book-show-top-middle">
                <div className="book-show-title">
                  {this.props.book.title}
                </div>
                <div className="book-show-author">
                  {this.props.book.author}
                </div>
                <div className="book-show-avg-rating">
                </div>
                <div className="book-show-synopsis">
                  {this.props.book.synopsis}
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
    debugger
    return (
      <>
        {bookShow()}
      </>
    )
  }
}

export default withRouter(BookShow);