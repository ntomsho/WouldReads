import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import shelvesReducer from './shelves_reducer';
import booksReducer from './books_reducer';
import reviewsReducer from './reviews_reducer';
import searchBooksReducer from './searchbooks_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  shelves: shelvesReducer,
  books: booksReducer,
  searchedBooks: searchBooksReducer,
  reviews: reviewsReducer
});

export default entitiesReducer;