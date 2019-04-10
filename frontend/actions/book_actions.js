import * as BookApiUtil from '../util/book_api_util';

export const RECEIVE_BOOKS = "RECEIVE_BOOKS";
export const RECEIVE_BOOK = "RECEIVE_BOOK";
export const REMOVE_SHELFBOOK = "REMOVE_SHELFBOOK";
export const REMOVE_SHELVING = "REMOVE_SHELVING";

export const fetchBooks = (shelf) => dispatch => {
  return BookApiUtil.fetchBooks(shelf).then(books => dispatch(receiveBooks(books)));
};

export const fetchBook = (id) => dispatch => {
  return BookApiUtil.fetchBook(id).then(book => dispatch(receiveBook(book)));
};

export const createShelfBook = (shelfBook) => dispatch => {
  return BookApiUtil.createShelfBook(shelfBook).then(book => dispatch(receiveBook(book)));
};

export const deleteShelfBook = (shelfBookId) => dispatch => {
  debugger
  return BookApiUtil.deleteShelfBook(shelfBookId).then(shelfBook => dispatch(removeShelfBook(shelfBook)));
};

export const deleteShelving = (shelfBookId) => dispatch => {
  debugger
  return BookApiUtil.deleteShelfBook(shelfBookId).then(shelfBook => dispatch(removeShelving(shelfBook)));
}

export const receiveBooks = (books) => ({
  type: RECEIVE_BOOKS,
  books
});

export const receiveBook = (book) => ({
  type: RECEIVE_BOOK,
  book
});

export const removeShelfBook = (shelfBook) => {
  return (
  {
  type: REMOVE_SHELFBOOK,
  shelfBook
  }
  );};

export const removeShelving = (shelfBook) => ({
  type: REMOVE_SHELVING,
  shelfBook
})