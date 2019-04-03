import {RECEIVE_BOOKS, RECEIVE_BOOK, REMOVE_SHELFBOOK} from '../actions/book_actions';

const booksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKS:
      return action.books;
    case RECEIVE_BOOK:
      return {[action.book.id]: action.book};
    case REMOVE_SHELFBOOK:
      let newState = Object.assign({}, state);
      delete newState[action.shelfBook.book_id];
      return newState;
    default:
      return state;
  }
};

export default booksReducer;