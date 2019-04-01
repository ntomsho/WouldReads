import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ShelfShowItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    debugger
    return (
      <li className="shelf-show-item">
        <div className="shelf-show-title">
          <p>{this.props.book.title}</p>
        </div>
        <div className="shelf-show-author">
          <p>{this.props.book.author}</p>
        </div>
      </li>
    )
  };

}

export default ShelfShowItem;