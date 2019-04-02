import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ShelfShowItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {book, shelves} = this.props;
    let shelvesByBook = book.shelves.map (id => {
      if (shelves[id].title !== "All") {
        return (
          <Link to="" key={shelves[id].id}>{shelves[id].title}</Link>
        );
      }
    });

    return (
      <tr className="shelf-show-item">
        <td className="shelf-show-cell shelf-show-cover">
          <p>PH</p>
        </td >
        <td className="shelf-show-cell shelf-show-title">
          <p>{this.props.book.title}</p>
        </td>
        <td className="shelf-show-cell shelf-show-author">
          <p>{this.props.book.author}</p>
        </td>
        <td className="shelf-show-cell shelf-show-avg-rating">
          <p>PH</p>
        </td>
        <td className="shelf-show-cell shelf-show-rating">
          <p>PH</p>
        </td>
        <td className="shelf-show-cell shelf-show-shelves">
          <div className="shelves-by-book">
            {shelvesByBook}
          </div>
        </td >
        <td className="shelf-show-cell shelf-show-date-added">
          <p>PH</p>
        </td >
      </tr>
    )
  };

}

export default ShelfShowItem;