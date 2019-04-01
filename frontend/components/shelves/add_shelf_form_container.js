import {connect} from 'react-redux';
import {createShelf} from '../../actions/shelf_actions';
import AddShelfForm from './add_shelf_form';

const msp = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mdp = (dispatch) => {
    return {
        createShelf: (shelf) => dispatch(createShelf(shelf))
    };
};

export default connect (msp,mdp)(AddShelfForm);