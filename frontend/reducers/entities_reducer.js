import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import shelvesReducer from './shelves_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  shelves: shelvesReducer
});

export default entitiesReducer;