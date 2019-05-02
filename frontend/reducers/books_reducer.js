import {RECEIVE_BOOKS, RECEIVE_BOOK, CLEAR_BOOKS, REMOVE_SHELFBOOK, REMOVE_SHELVING} from '../actions/book_actions';

const booksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKS:
      return action.books;
    case RECEIVE_BOOK:
      let newState = Object.assign({}, state);
      newState[action.book.id] = action.book;
      return newState;
    case CLEAR_BOOKS:
      return {};
    case REMOVE_SHELFBOOK:
      newState = Object.assign({}, state);
      delete newState[action.shelfBook.book_id];
      return newState;
    case REMOVE_SHELVING:
      newState = Object.assign({}, state);
      let targetIndex
      newState[action.shelfBook.book_id].shelf_books.map(shelving => {
        if (shelving.id === action.shelfBook.id) {
          targetIndex = newState[action.shelfBook.book_id].shelf_books.indexOf(shelving)
        }
      })
      delete newState[action.shelfBook.book_id].shelf_books[targetIndex];
    default:
      return state;
  }
};

export default booksReducer;