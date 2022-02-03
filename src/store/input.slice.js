import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    inputs: [],
    status: null,
    error: null
}

const inputSlice = createSlice({
    name: 'inputSlice',
    initialState,
    reducers: {
        addInput: (state, action) => {
            state.inputs.push({...action.payload.data, id: new Date().getTime(), status: false})
        },
        checkedBox: (state, action) => {
            const find = state.inputs.find(input => input.id === action.payload.id);
            find.status = !find.status
        },
        deleteInput: (state,action) => {
            state.inputs.splice(action.payload.index,1)
        }
    }
})

const inputReducer = inputSlice.reducer;
export const {addInput, deleteInput, checkedBox} = inputSlice.actions;

export default inputReducer