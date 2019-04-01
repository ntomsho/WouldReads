import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
<<<<<<< HEAD

const entitiesReducer = combineReducers({
  users: usersReducer
=======
import shelvesReducer from './shelves_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  shelves: shelvesReducer
>>>>>>> f9f5f011a7598d2e07cddb7ad02e6062c60be57a
});

export default entitiesReducer;