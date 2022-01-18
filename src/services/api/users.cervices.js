import {urls} from "./ulrs";

const usersCervices = () => {
    return {
        getALL: () => {
            return fetch(urls.users)
            .then(response => response.json())
        }
    }
};

export default usersCervices;