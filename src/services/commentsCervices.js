import {axiosJsonPlaceHolder} from "./axiosServices";
import {urls} from "../configs";

const commentsCervices = {
    getAll: async () => {
        const comments = await axiosJsonPlaceHolder.get(urls.comments);
        return comments.data
    },
    getOneById: async (id) => {
        const comment = await axiosJsonPlaceHolder.get(`${urls.comments}/${id}`);
        return comment.data
    }
}
export {commentsCervices}