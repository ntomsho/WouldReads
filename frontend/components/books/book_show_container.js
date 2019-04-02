import {connect} from 'react-redux';
import BookShow from './book_show';
import * as BookActions from '../../actions/book_actions';

const msp = ({session, entities}, ownProps) => {
  debugger
  return {
    currentUser: entities.users[session.id],
    book: entities.books,
    shelves: Object.keys(entities.shelves).map(id => entities.shelves[id])
  };
};

const mdp = (dispatch) => {
  return {
    fetchBook: (id => dispatch(BookActions.fetchBook(id)))
  };
};

export default connect(msp,mdp)(BookShow);