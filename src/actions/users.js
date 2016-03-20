import api from '../api';

export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_USERS_FAIL    = 'LOAD_USERS_FAIL';
export const LOAD_USERS_REQUEST = 'LOAD_USERS_REQUEST';

export function loadUsers() {
    return (dispatch) => {
        dispatch({
            type : LOAD_USERS_REQUEST
        });

        return api.searchUsers().then(data => {
            console.log(data);
            dispatch({
                type  : LOAD_USERS_SUCCESS,
                users : data.data
            });
        });
    };
}
