import urls from "./urls";

const usersServices = () => {
    return {
        getAll: () => {
            return fetch(urls.usersURL)
                .then(response => response.json())
        },
        getUser: (id) => {
            return fetch(urls.usersURL +`/${id}`)
                .then(response => response.json())
        },
        getPosts: (id) => {
            return fetch(urls.usersURL + `/${id}/posts`)
            .then(response => response.json())
        }
    }
};

export {usersServices};