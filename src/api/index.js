import axios from 'axios';

import config from '../config.js';

const API_PREFIX = 'https://api.github.com';

export function searchUsersByLanguage(language) {
    const params = {
        'q'            : `language:${language}`,
        'per_page'     : config.numberOfProfilesToDisplay,
        'access_token' : config.githubApiToken,
        'sort'         : 'followers',
        'order'        : 'desc'
    };

    return axios.get(`${API_PREFIX}/search/users`, { params });
}

export function showUserProfile(login) {
    const params = {
        'access_token': config.githubApiToken
    };

    return axios.get(`${API_PREFIX}/users/${login}`, { params });
}

export default {
    searchUsersByLanguage,
    showUserProfile
};
