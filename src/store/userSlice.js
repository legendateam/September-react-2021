import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersCervices} from "../services";

const initialState = {
    users: [],
    status: null,
    error: null
}

const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_,{rejectWithValue})=> {
        try {
            const users = await usersCervices.getAll();
            return {users}
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    extraReducers: {
        [getAllUsers.pending]: state => {
            state.status = 'pending';
            state.error = null
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.error = null;
            state.users = action.payload.users
        },
        [getAllUsers.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        }
    }
})

export const userReducer = userSlice.reducer;
export {getAllUsers}