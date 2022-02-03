import {axiosJsonPlaceHolder} from "./axiosServices";

import {urls} from "../configs";

const usersCervices = {
    getAll: async () => {
        const users = await axiosJsonPlaceHolder.get(urls.users);
        return users.data
    },
    getOneById: async (id) => {
        const user = await axiosJsonPlaceHolder.get(`${urls.users}/${id}`);
        return user.data
    }
}
export {usersCervices}