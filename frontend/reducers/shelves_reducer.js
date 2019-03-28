import {RECEIVE_SHELVES, RECEIVE_SHELF, REMOVE_SHELF} from '../actions/shelf_actions';

const shelvesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SHELVES:
      return action.shelves;
    case RECEIVE_SHELF:
      return action.shelf;
    case REMOVE_SHELF:
      let newState = Object.assign({}, state);
      delete newState[action.shelfId];
      return newState;
    default:
      return state;
  }
};

export default shelvesReducer;