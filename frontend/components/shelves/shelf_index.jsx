import React from 'react';
import ShelfIndexItem from './shelf_index_item';
import AddShelfForm from './add_shelf_form_container';

class ShelfIndex extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {shelfAdd: false};
    this.addShelfField = this.addShelfField.bind(this);
  }

  componentDidMount() {
    this.props.fetchShelves(this.props.currentUser)
  }

  addShelfField() {
    this.setState({shelfAdd: true})
  }

  // addShelfField() {
  //   const shelfAddButton = () => {
  //     return (
  //       <button onClick={this.setState({shelfAdd: true})}>Add Field</button>
  //     );
  //   };

  //   const shelfAddField = () => {
  //     return (
  //       <AddShelfForm />
  //     )
  //   }

  //   return this.state.shelfAdd ? shelfAddButton : shelfAddField
  // }

  render () {
    const shelfAdd = this.state.shelfAdd ? 
      <AddShelfForm /> : <button className="add-shelf-field-button" onClick={this.addShelfField}>Add shelf</button>
    
    return (
      <div className="shelves-index-container">
        <p className="shelves-header">Bookshelves</p>
        <ul className="shelves-index-list">
          {this.props.shelves.map(shelf => (
            <ShelfIndexItem
              shelf={shelf}
              key={shelf.id}
              deleteShelf={this.props.deleteShelf}
            />
          ))}
        </ul>
        {shelfAdd}
      </div>
    )
  }
};

export default ShelfIndex;