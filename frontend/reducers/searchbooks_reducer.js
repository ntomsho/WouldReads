import { RECEIVE_SEARCH_BOOKS } from '../actions/book_actions';

const searchBooksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SEARCH_BOOKS:
            return action.books;
        default:
            return state;
    }
};

export default searchBooksReducer;