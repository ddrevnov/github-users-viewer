import api from '../api';

export const LOAD_USERS_LIST_REQUEST = 'LOAD_USERS_LIST_REQUEST';
export const LOAD_USERS_LIST_SUCCESS = 'LOAD_USERS_LIST_SUCCESS';
export const LOAD_USERS_LIST_FAIL    = 'LOAD_USERS_LIST_FAIL';

export const LOAD_USER_PROFILE_REQUEST = 'LOAD_USER_PROFILE_REQUEST';
export const LOAD_USER_PROFILE_SUCCESS = 'LOAD_USER_PROFILE_SUCCESS';
export const LOAD_USER_PROFILE_FAIL    = 'LOAD_USER_PROFILE_FAIL';

export function loadPopularUsersByLanguage(language) {
    return (dispatch) => {
        dispatch({
            type             : LOAD_USERS_LIST_REQUEST,
            selectedLanguage : language
        });

        return api.searchUsersByLanguage(language)
            .then(({ data: searchData }) => {
                dispatch({
                    type  : LOAD_USERS_LIST_SUCCESS,
                    items : searchData.items
                });

                searchData.items.forEach(item => {
                    api.showUserProfile(item.login).then(({ data: profileData }) => {
                        dispatch({
                            profileData,
                            type  : LOAD_USER_PROFILE_SUCCESS,
                            login : item.login
                        });
                    });
                });
            })
            .catch(({ data: errorData }) => {
                dispatch({
                    type  : LOAD_USERS_LIST_FAIL,
                    error : errorData
                });
            });
    };
}
