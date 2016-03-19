import {
    LOAD_USERS_SUCCESS
} from '../actions/users';

const DEFAULT_STATE = { users: [] };

export default function users(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case LOAD_USERS_SUCCESS:
            return {
                ...state,
                users: action.users
            };
        default:
            return state;
    }
}
