import {RECEIVE_SHELVES, RECEIVE_SHELF, REMOVE_SHELF} from '../actions/shelf_actions';

const shelvesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SHELVES:
      debugger
      return action.shelves;
    case RECEIVE_SHELF:
      let newState = Object.assign({}, state);
      newState[action.shelf.id] = action.shelf;
      return newState;
    case REMOVE_SHELF:
      newState = Object.assign({}, state);
      delete newState[action.shelf.id];
      return newState;
    default:
      return state;
  }
};

export default shelvesReducer;