import * as ShelfApiUtil from '../util/shelf_api_util';

export const RECEIVE_SHELVES = "RECEIVE_SHELVES";
export const RECEIVE_SHELF = "RECEIVE_SHELF";
export const REMOVE_SHELF = "REMOVE_SHELF";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const fetchShelves = (user) => dispatch => {
  return ShelfApiUtil.fetchShelves(user).then(shelves => dispatch(receiveShelves(shelves)));
};

export const fetchShelf = (id) => dispatch => {
  return ShelfApiUtil.fetchShelf(id).then(shelf => dispatch(receiveShelf(shelf)));
};

export const createShelf = (shelf) => dispatch => {
  return ShelfApiUtil.createShelf(shelf).then(shelf => dispatch(receiveShelf(shelf)));
};

export const updateShelf = (shelf) => dispatch => {
  return ShelfApiUtil.updateShelf(shelf.id).then(shelf => dispatch(receiveShelf(shelf)));
};

export const deleteShelf = (shelfId) => dispatch => {
  return ShelfApiUtil.deleteShelf(shelfId).then(shelf => dispatch(removeShelf(shelf)));
};


export const receiveShelves = (shelves) => ({
  type: RECEIVE_SHELVES,
  shelves
});

export const receiveShelf = (shelf) => ({
  type: RECEIVE_SHELF,
  shelf
});

export const removeShelf = (shelf) => ({
  type: REMOVE_SHELF,
  shelf
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});