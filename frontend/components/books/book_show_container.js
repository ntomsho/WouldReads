import {connect} from 'react-redux';
import BookShow from './book_show';
import * as BookActions from '../../actions/book_actions';
import * as ShelfActions from '../../actions/shelf_actions';

const msp = ({session, entities}, ownProps) => {
  return {
    currentUser: entities.users[session.id],
    currentBook: entities.books[parseInt(ownProps.match.params.id)],
    shelves: Object.keys(entities.shelves).map(id => entities.shelves[id])
  };
};

const mdp = (dispatch) => {
  return {
    fetchBook: (id => dispatch(BookActions.fetchBook(id))),
    fetchShelves: (shelf => dispatch(ShelfActions.fetchShelves(shelf))),
    createShelfBook: (shelfBook => dispatch(BookActions.createShelfBook(shelfBook))),
    deleteShelfBook: (shelfBookId => dispatch(BookActions.deleteShelfBook(shelfBookId)))
  };
};

export default connect(msp,mdp)(BookShow);