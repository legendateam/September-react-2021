import {axiosJsonPlaceHolder} from "./axiosServices";
import {urls} from "../configs";

const postsCervices = {
    getALL: async ()=> {
        const posts = await axiosJsonPlaceHolder.get(urls.posts);
        return posts.data
    },
    getOneById: async (id)=> {
        const post = await axiosJsonPlaceHolder.get(`${urls.posts}/${id}`);
        return post.data
    }
}
export {postsCervices}