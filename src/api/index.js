import axios from 'axios';

import config from '../config.js';

const API_PREFIX = 'https://api.github.com';

export function searchUsersByLanguage(language) {
    return axios.get(`${API_PREFIX}/search/users?q=language:${language}&per_page=${config.numberOfProfilesToDisplay}&access_token=${config.githubApiToken}&sort=followers&order=desc`);
}

export function showUserProfile(login) {
    return axios.get(`${API_PREFIX}/users/${login}?access_token=${config.githubApiToken}`);
}

export default {
    searchUsersByLanguage,
    showUserProfile
};
