import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import shelvesReducer from './shelves_reducer';
import booksReducer from './books_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  shelves: shelvesReducer,
  books: booksReducer
});

export default entitiesReducer;