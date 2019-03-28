import {connect} from 'react-redux';
import ShelfIndex from './shelf_index';
import * as ShelfActions from '../../actions/shelf_actions';

const msp = ({session, entities: users}) => {
  return {
    currentUser: users[session.id],
    shelves: Array.from(fetchShelves(users[session.id]))
  };
};

const mdp = (dispatch) => {
  return {
    fetchShelves: (filters) => dispatch(ShelfActions.fetchShelves(filters))
  };
};

export default connect(msp, mdp)(ShelfIndex);