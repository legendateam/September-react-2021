import {
    getAllUsersAsyncCervices, getAllUsersAsyncCervicesNoData,
    getAllUsersCervices,
    getAllUsersCervicesAxiosResponse
} from "./services/users.cervices";
import {IUsers} from "./interfaces/users.interfaces";
// import {AxiosResponse} from "axios";
//
// getAllUsersCervices().then(users => users.forEach(user => console.log('name', user.name)));
//
// getAllUsersCervicesAxiosResponse()
//     .then(response => response.data)
//     .then(users => users.forEach(user => console.log('username',user.username)));
//
// const getAllUsersAsyncMethod = async ():Promise<IUsers[]> => {
//     const users = await getAllUsersAsyncCervices();
//     users.forEach(user => console.log('myUser',user))
//     return users
// }
//
// const getAllUsersAsyncMethodNoDataOnStars = async (): Promise<AxiosResponse<IUsers[]>> => {
//     const response = await getAllUsersAsyncCervicesNoData();
//     const users = await response.data
//     users.forEach(user => console.log('phone', user.phone))
//     return response
// }
//
// getAllUsersAsyncMethodNoDataOnStars()
//
// getAllUsersAsyncMethod()


// import {
//     postsCervices,
//     postsCervicesAsyncAwait,
//     postsCervicesAsyncAwaitHaveData,
//     postsCervicesHaveData
// } from "./services/posts.cervices";
// import {AxiosResponse} from "axios";
// import {IPosts} from "./interfaces/posts.interfaces";
//
// postsCervices.getAll().then(posts => posts.data).then(posts => posts.forEach(post => console.log(post.title)))
// postsCervices.getOne(5).then(posts => posts.data).then(post => console.log(post.id,post.title))
//
// postsCervicesHaveData.getAll().then(posts => posts.forEach(post => console.log(post.id, post.title)))
// postsCervicesHaveData.getOne(10).then(post => console.log(post.id, post.title))
//
//
//
// const asyncAwaitGetAllPostsNoDataDefault = async ():Promise<IPosts[]> => {
//     const response = await postsCervicesAsyncAwait.getALL();
//     const posts = await response.data
//     posts.forEach(post => console.log(post.userId,post.id,post.title))
//     return posts
// }
//
// const asyncAwaitGetOnePostsNoDataDefault = async ():Promise<IPosts> => {
//     const response = await postsCervicesAsyncAwait.getOne(40);
//     const post = await response.data;
//     console.log(post.id)
//     return post
// }
//
// asyncAwaitGetAllPostsNoDataDefault();
//
// asyncAwaitGetOnePostsNoDataDefault();
//
//
// const asyncAwaitGetAllPostsHaveDataDefault = async ():Promise<IPosts[]> => {
//     const posts = await postsCervicesAsyncAwaitHaveData.getALL();
//     posts.forEach(post => console.log(post.userId,post.id,post.title))
//     return posts
// }
//
// const asyncAwaitGetOnePostsHaveDataDefault = async ():Promise<IPosts> => {
//     const post = await postsCervicesAsyncAwaitHaveData.getOne(70);
//     console.log(post.id)
//     return post
// }
//
// asyncAwaitGetAllPostsHaveDataDefault();
//
// asyncAwaitGetOnePostsHaveDataDefault()