import React from 'react';
import ShelfIndexItem from './shelf_index_item';
import AddShelfForm from './add_shelf_form_container';

class ShelfIndex extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {shelfAdd: false};
    this.addShelfField = this.addShelfField.bind(this);
    this.removeShelfField = this.removeShelfField.bind(this);
  }

  componentDidMount() {
    this.props.fetchShelves(this.props.currentUser);
  }

  addShelfField() {
    this.setState({shelfAdd: true});
  }

  removeShelfField() {
    this.setState({shelfAdd: false});
  }

  render () {
    const shelfAdd = this.state.shelfAdd ? 
      <AddShelfForm removeShelfField={this.removeShelfField} /> : 
      <button className="add-shelf-field-button" onClick={this.addShelfField}>Add shelf</button>
    
    return (
      <div className="shelves-index-container">
        <p className="shelves-header">Bookshelves</p>
        <ul className="shelves-index-list">
          {this.props.shelves.map(shelf => {
            if (shelf.default_shelf) {
            return (
              <ShelfIndexItem
                shelf={shelf}
                key={shelf.id}
                deleteShelf={this.props.deleteShelf}
              />
            )}
          })}
          <div className="shelves-divider"> </div>
          {this.props.shelves.map(shelf => {
            if (!shelf.default_shelf) {
              return (
                <ShelfIndexItem
                  shelf={shelf}
                  key={shelf.id}
                  deleteShelf={this.props.deleteShelf}
                />
              )
            }
          })}
        </ul>
        {shelfAdd}
      </div>
    )
  }
};

export default ShelfIndex;