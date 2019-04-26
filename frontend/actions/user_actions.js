import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";

export const fetchUsers = () => dispatch => {
    debugger
    return UserApiUtil.fetchUsers().then((users) => dispatch(receiveUsers(users)));
};

export const receiveUsers = (users) => {
    debugger
    return ({
        type: RECEIVE_USERS,
        users
    })
};