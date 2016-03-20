export function formatUserProfile(data) {
    return {
        login: data.login,
        id: data.id,
        avatar: data.avatar_url,
        linkToProfileObGithub: data.html_url,
        numberOfFollowers: data.followers,
        name: data.name
    };
}
