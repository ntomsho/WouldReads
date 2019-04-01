import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ShelfShowItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr className="shelf-show-item">
        <td className="shelf-show-cell">
          <p>PH</p>
        </td >
        <td className="shelf-show-cell">
          <p>{this.props.book.title}</p>
        </td>
        <td className="shelf-show-cell">
          <p>{this.props.book.author}</p>
        </td>
        <td className="shelf-show-cell">
          <p>Placeholder</p>
        </td>
        <td className="shelf-show-cell">
          <p>Placeholder</p>
        </td>
        <td className="shelf-show-cell">
          <p>Placeholder</p>
        </td >
        <td className="shelf-show-cell">
          <p>Placeholder</p>
        </td >
      </tr>
    )
  };

}

export default ShelfShowItem;