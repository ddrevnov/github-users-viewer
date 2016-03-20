import expect from 'expect';

import {
    LOAD_USERS_LIST_REQUEST,
    LOAD_USERS_LIST_SUCCESS,
    LOAD_USERS_LIST_FAIL,
    LOAD_USER_PROFILE_SUCCESS
} from '../../src/actions/users';

import users from '../../src/reducers/users';

describe('users reducer', () => {
    it('should handle initial state', () => {
        expect(
            users(undefined, {})
        ).toEqual({
            items: [],
            selectedLanguage: '',
            loadingPercent: 0,
            error: null
        });
    });

    it('should handle LOAD_USERS_LIST_REQUEST', () => {
        expect(
            users(undefined, {
                type: LOAD_USERS_LIST_REQUEST,
                selectedLanguage: 'javascript'
            })
        ).toEqual({
            items: [],
            selectedLanguage: 'javascript',
            loadingPercent: 0,
            error: null
        });
    });

    it('should handle LOAD_USERS_LIST_SUCCESS', () => {
        expect(
            users({
                items: [],
                selectedLanguage: 'javascript',
                loadingPercent: 0,
                error: null
            }, {
                type: LOAD_USERS_LIST_SUCCESS,
                items: [
                    {
                        "login": "paulirish",
                        "id": 39191,
                        "avatar_url": "https://avatars.githubusercontent.com/u/39191?v=3",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/paulirish",
                        "html_url": "https://github.com/paulirish",
                        "followers_url": "https://api.github.com/users/paulirish/followers",
                        "following_url": "https://api.github.com/users/paulirish/following{/other_user}",
                        "gists_url": "https://api.github.com/users/paulirish/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/paulirish/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/paulirish/subscriptions",
                        "organizations_url": "https://api.github.com/users/paulirish/orgs",
                        "repos_url": "https://api.github.com/users/paulirish/repos",
                        "events_url": "https://api.github.com/users/paulirish/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/paulirish/received_events",
                        "type": "User",
                        "site_admin": false,
                        "score": 1.0
                    },
                    {
                        "login": "tj",
                        "id": 25254,
                        "avatar_url": "https://avatars.githubusercontent.com/u/25254?v=3",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/tj",
                        "html_url": "https://github.com/tj",
                        "followers_url": "https://api.github.com/users/tj/followers",
                        "following_url": "https://api.github.com/users/tj/following{/other_user}",
                        "gists_url": "https://api.github.com/users/tj/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/tj/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/tj/subscriptions",
                        "organizations_url": "https://api.github.com/users/tj/orgs",
                        "repos_url": "https://api.github.com/users/tj/repos",
                        "events_url": "https://api.github.com/users/tj/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/tj/received_events",
                        "type": "User",
                        "site_admin": false,
                        "score": 1.0
                    }
                ]
            })
        ).toEqual({
            items: [ { login: 'paulirish', isLoading: true }, { login: 'tj', isLoading: true } ],
            selectedLanguage: 'javascript',
            loadingPercent: 0,
            error: null
        });
    });

    it('should handle LOAD_USER_PROFILE_SUCCESS', () => {
        expect(
            users({
                items: [ { login: 'paulirish', isLoading: true }, { login: 'tj', isLoading: true } ],
                selectedLanguage: 'javascript',
                loadingPercent: 0,
                error: null
            }, {
                type: LOAD_USER_PROFILE_SUCCESS,
                login: 'paulirish',
                profileData: {
                    "login": "paulirish",
                    "id": 39191,
                    "avatar_url": "https://avatars.githubusercontent.com/u/39191?v=3",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/paulirish",
                    "html_url": "https://github.com/paulirish",
                    "followers_url": "https://api.github.com/users/paulirish/followers",
                    "following_url": "https://api.github.com/users/paulirish/following{/other_user}",
                    "gists_url": "https://api.github.com/users/paulirish/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/paulirish/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/paulirish/subscriptions",
                    "organizations_url": "https://api.github.com/users/paulirish/orgs",
                    "repos_url": "https://api.github.com/users/paulirish/repos",
                    "events_url": "https://api.github.com/users/paulirish/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/paulirish/received_events",
                    "type": "User",
                    "site_admin": false,
                    "name": "Paul Irish",
                    "company": "Google Chrome, ♥z",
                    "blog": "http://paulirish.com",
                    "location": "Palo Alto",
                    "email": null,
                    "hireable": null,
                    "bio": null,
                    "public_repos": 189,
                    "public_gists": 100,
                    "followers": 19399,
                    "following": 224,
                    "created_at": "2008-12-09T00:39:23Z",
                    "updated_at": "2016-03-08T09:47:11Z"
                }
            })
        ).toEqual({
            items: [
                {
                    isLoading: false,
                    login: 'paulirish',
                    id: 39191,
                    avatar: 'https://avatars.githubusercontent.com/u/39191?v=3',
                    linkToProfileOnGithub: 'https://github.com/paulirish',
                    numberOfFollowers: 19399
                },
                {
                    login: 'tj',
                    isLoading: true
                }
            ],
            selectedLanguage: 'javascript',
            loadingPercent: 50,
            error: null
        });
    });

    it('should handle LOAD_USERS_LIST_FAIL', () => {
        expect(
            users(undefined, {
                type: LOAD_USERS_LIST_FAIL,
                error: {
                    "documentation_url": "https://developer.github.com/v3",
                    "message": "Bad credentials"
                }
            })
        ).toEqual({
            items: [],
            selectedLanguage: '',
            loadingPercent: 0,
            error: {
                message: "Bad credentials",
                linkToDocs: "https://developer.github.com/v3"
            }
        });
    });
});
