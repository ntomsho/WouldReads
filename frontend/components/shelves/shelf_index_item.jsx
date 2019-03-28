import React from 'react';
import { withRouter } from 'react-router-dom';

class ShelfIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props.shelf;
    debugger
    return (
    <li className="shelf-index-item">
      <p>{title}</p>
    </li>
    )
  };

}

export default ShelfIndexItem