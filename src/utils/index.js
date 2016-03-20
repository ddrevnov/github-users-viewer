export function formatUserProfile(data) {
    return {
        login: data.login,
        id: data.id,
        avatar: data.avatar_url,
        linkToProfileOnGithub: data.html_url,
        numberOfFollowers: data.followers
    };
}
