export function formatUserProfile(data) {
    return {
        login: data.login,
        id: data.id,
        avatar: data.avatar_url,
        linkToProfileOnGithub: data.html_url,
        numberOfFollowers: data.followers
    };
}

export function formatError(data) {
    return {
        message: data.message,
        linkToDocs: data.documentation_url
    };
}
