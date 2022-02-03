import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentsCervices} from "../services";

const initialState = {
    comments: [],
    status: null,
    error: null
}

const getAllComments = createAsyncThunk(
    'commentSlice/getAllComments',
    async (_,{rejectWithValue})=> {
        try {
            const comments = await commentsCervices.getAll();
            return {comments}
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    extraReducers: {
        [getAllComments.pending]: state => {
            state.status = 'pending';
            state.error = null
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.comments = action.payload.comments
        },
        [getAllComments.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        }
    }
})

export const commentReducer = commentSlice.reducer;

export {getAllComments}
