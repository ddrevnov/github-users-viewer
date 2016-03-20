import {
    LOAD_USERS_LIST_SUCCESS,
    LOAD_USER_PROFILE_SUCCESS
} from '../actions/users';

import { formatUserProfile } from '../utils/apiResponseFormatter';

const DEFAULT_STATE = { users: [], selectedLanguage: '', loadingStatus: 0 };

export default function users(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case LOAD_USERS_LIST_SUCCESS: {
            const users = action.users.map(user => {
                return {
                    login: user.login,
                    isLoading: true
                };
            });

            return {
                ...state,
                users: users
            };
        }

        case LOAD_USER_PROFILE_SUCCESS: {
            console.info(action.login);

            const users = state.users.map(user =>
                user.login === action.login
                    ? {
                        ...formatUserProfile(action.profileData),
                        isLoading: false
                    }
                    : user
            );

            return {
                ...state,
                users: users
            };
        }

        default: {
            return state;
        }
    }
}
