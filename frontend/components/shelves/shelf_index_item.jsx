import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

class ShelfIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props.shelf;
    let deleteButton
    if (this.props.shelf.default_shelf === false) {
      deleteButton = (<button onClick={() => {
        this.props.deleteShelf(this.props.shelf.id);
        }
      }>X</button>);
    }
    
    return (
    <li className="shelf-index-item">
      <NavLink to={`/shelves/${this.props.shelf.id}`} shelf={this.props.shelf}>{title}</NavLink>
      {deleteButton}
    </li>
    )
  };

}

export default withRouter(ShelfIndexItem);