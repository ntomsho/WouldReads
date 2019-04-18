import { connect } from 'react-redux';
import {searchBooks} from '../../actions/book_actions';
import Search from './search';

const msp = ({ entities }) => {
    return {
        searchedBooks: entities.searchedBooks
    };
};

const mdp = (dispatch) => {
    return {
        searchBooks: (filter) => dispatch(searchBooks(filter))
    };
};

export default connect(msp, mdp)(Search);