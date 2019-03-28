import React from 'react';
import ShelfIndexItem from './shelf_index_item';

const ShelfIndex = (props) => {
  debugger
  return (
    <div className="shelves-index-container">
      <p className="shelves-header">Bookshelves</p>
      <ul className="shelves-index-list">
        {props.shelves.map(shelf => (
          <ShelfIndexItem
            shelf={shelf}
            key={shelf.id}
          />
        ))}
      </ul>
    </div>
  )
};

export default ShelfIndex;