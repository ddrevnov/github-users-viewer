import axios from 'axios';

const API_PREFIX = 'https://api.github.com';

export default {
    searchUsers() {
        return axios.get(`${API_PREFIX}/users?q=language:javascript`);
    }
};
