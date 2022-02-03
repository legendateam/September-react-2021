import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsCervices} from "../services";

const initialState = {
    posts: [],
    status: null,
    error: null
}

const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_,{dispatch, rejectWithValue}) => {
        try {
            const posts = await postsCervices.getALL();
            dispatch(setAllPosts({posts}))
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
      setAllPosts: (state, action) => {
          state.posts = action.payload.posts
      }
    },
    extraReducers: {
        [getAllPosts.pending]: state => {
            state.status = 'pending'
            state.error = null
        },
        [getAllPosts.fulfilled]: state => {
            state.status = 'fulfilled'
        },
        [getAllPosts.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const postReducer = postSlice.reducer;
const {setAllPosts} = postSlice.actions;

export default postReducer
export {setAllPosts, getAllPosts}