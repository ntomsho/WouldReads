import {connect} from 'react-redux';
import ShelfIndex from './shelf_index';
import * as ShelfActions from '../../actions/shelf_actions';

const msp = ({session, entities}) => {
  return {
    currentUser: entities.users[session.id],
    shelves: Object.keys(entities.shelves).map(id => entities.shelves[id])
  };
};

const mdp = (dispatch) => {
  return {
    fetchShelves: (user => dispatch(ShelfActions.fetchShelves(user))),
    deleteShelf: (shelfId => dispatch(ShelfActions.deleteShelf(shelfId)))
  };
};

export default connect(msp, mdp)(ShelfIndex);