import {
    LOAD_USERS_LIST_REQUEST,
    LOAD_USERS_LIST_SUCCESS,
    LOAD_USERS_LIST_FAIL,
    LOAD_USER_PROFILE_SUCCESS
} from '../actions/users';

import { formatUserProfile, formatError } from '../utils';

const DEFAULT_STATE = { items: [], selectedLanguage: '', loadingPercent: 0, error: null };

export default function users(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case LOAD_USERS_LIST_REQUEST: {
            return {
                ...state,
                selectedLanguage: action.selectedLanguage
            };
        }

        case LOAD_USERS_LIST_SUCCESS: {
            const items = action.items.map(user => {
                return {
                    login: user.login,
                    isLoading: true
                };
            });

            return {
                ...state,
                items,
                loadingPercent: 0
            };
        }

        case LOAD_USERS_LIST_FAIL: {
            return {
                ...state,
                error : formatError(action.error)
            };
        }

        case LOAD_USER_PROFILE_SUCCESS: {
            const items = state.items.map(item =>
                item.login === action.login
                    ? {
                        ...formatUserProfile(action.profileData),
                        isLoading: false
                    }
                    : item
            );

            const loadingPercent = state.loadingPercent + (1 / items.length) * 100;

            return {
                ...state,
                items,
                loadingPercent
            };
        }

        default: {
            return state;
        }
    }
}
