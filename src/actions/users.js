import api from '../api';

export const LOAD_USERS_LIST_REQUEST = 'LOAD_USERS_LIST_REQUEST';
export const LOAD_USERS_LIST_SUCCESS = 'LOAD_USERS_LIST_SUCCESS';
export const LOAD_USERS_LIST_FAIL    = 'LOAD_USERS_LIST_FAIL';

export const LOAD_USER_PROFILE_REQUEST = 'LOAD_USER_PROFILE_REQUEST';
export const LOAD_USER_PROFILE_SUCCESS = 'LOAD_USER_PROFILE_SUCCESS';
export const LOAD_USER_PROFILE_FAIL    = 'LOAD_USER_PROFILE_FAIL';

export function loadUserProfiles(language) {
    return (dispatch) => {
        dispatch({
            type : LOAD_USERS_LIST_REQUEST
        });

        return api.searchUsersByLanguage(language).then(({ data }) => {
            dispatch({
                type  : LOAD_USERS_LIST_SUCCESS,
                users : data.items
            });


            data.items.forEach(item => {
                api.showUserProfile(item.login).then(({ data }) => {
                    dispatch({
                        type        : LOAD_USER_PROFILE_SUCCESS,
                        profileData : data,
                        login       : item.login
                    });
                });
            });
        });
    };
}
