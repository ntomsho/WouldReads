import * as BookApiUtil from '../util/book_api_util';

export const RECEIVE_BOOKS = "RECEIVE_BOOKS";
export const RECEIVE_BOOK = "RECEIVE_BOOK";
export const CLEAR_BOOKS = "CLEAR_BOOKS";
export const RECEIVE_SEARCH_BOOKS = "RECEIVE_SEARCH_BOOKS";
export const CLEAR_SEARCH_BOOKS = "CLEAR_SEARCH_BOOKS";
export const REMOVE_SHELFBOOK = "REMOVE_SHELFBOOK";
export const REMOVE_SHELVING = "REMOVE_SHELVING";


export const fetchBooks = (arr) => dispatch => {
  if (arr) {
    arr.forEach(id => {
      return BookApiUtil.fetchBook(id).then(book => dispatch(receiveBook(book)));
    })
  } else {
    return BookApiUtil.searchBooks().then(books => dispatch(receiveBooks(books.items)));
  }
}

export const searchBooks = (filter) => dispatch => {
  return BookApiUtil.searchBooks(filter).then(books => dispatch(receiveSearchBooks(books)));
};

export const fetchBook = (id) => dispatch => {
  return BookApiUtil.fetchBook(id).then(book => dispatch(receiveBook(book)));
};

export const createShelfBook = (shelfBook) => dispatch => {
  return BookApiUtil.createShelfBook(shelfBook).then(book => dispatch(receiveBook(book)));
};

export const deleteShelfBook = (shelfBookId) => dispatch => {
  return BookApiUtil.deleteShelfBook(shelfBookId).then(shelfBook => dispatch(removeShelfBook(shelfBook)));
};

export const deleteShelving = (shelfBookId) => dispatch => {
  return BookApiUtil.deleteShelfBook(shelfBookId).then(shelfBook => dispatch(removeShelving(shelfBook)));
}

export const receiveBooks = (books) => {
  return (
  {
    type: RECEIVE_BOOKS,
    books
  }
  );};

export const receiveBook = (book) => {
  return ({
    type: RECEIVE_BOOK,
    book
  })
};

export const clearBooks = () => ({
  type: CLEAR_BOOKS
});

export const receiveSearchBooks = (books) => {
  return (
    {
    type: RECEIVE_SEARCH_BOOKS,
    books
    }
  )
};

export const clearSearchBooks = () => ({
  type: CLEAR_SEARCH_BOOKS
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
});