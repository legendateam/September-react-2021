import urls from "./urls";


const postsServices = () => {
    return {
        getAll: () => {
            return fetch(urls.postsURL)
                .then(response => response.json())
        },

        getPost: (id) => {
            return fetch(urls.postsURL + `/${id}`)
                .then(response => response.json())
        }
    }

};

export default postsServices;