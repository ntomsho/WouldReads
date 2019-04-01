import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ShelfShowItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr className="shelf-show-item">
        <td className="shelf-show-cell" className="shelf-show-cover">
          <p>PH</p>
        </td >
        <td className="shelf-show-cell" className="shelf-show-title">
          <p>{this.props.book.title}</p>
        </td>
        <td className="shelf-show-cell" className="shelf-show-author">
          <p>{this.props.book.author}</p>
        </td>
        <td className="shelf-show-cell" className="shelf-show-avg-rating">
          <p>Placeholder</p>
        </td>
        <td className="shelf-show-cell" className="shelf-show-rating">
          <p>Placeholder</p>
        </td>
        <td className="shelf-show-cell" className="shelf-show-shelves">
          <p>Placeholder</p>
        </td >
        <td className="shelf-show-cell" className="shelf-show-date-added">
          <p>Placeholder</p>
        </td >
      </tr>
    )
  };

}

export default ShelfShowItem;