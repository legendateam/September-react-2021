import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carsCervices} from "../services";

const initialState = {
    cars: [],
    update: {},
    status: null,
    error: null,
}

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_,{rejectWithValue})=> {
        try{
            const cars = await carsCervices.getAll();
            return {cars}
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)

export const addCarThunk = createAsyncThunk(
    'carSlice/addCarThunk',
    async ({car}, {dispatch, rejectWithValue}) => {
        try {
            const newCar = await carsCervices.create(car);
            dispatch(addCar({car: newCar}))
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)

export const deleteCarThunk = createAsyncThunk(
    'carSlice/deleteCarThunk',
    async ({id, index}, {dispatch, rejectedWithValue}) => {
        try {
            await carsCervices.deleteById(id);
            dispatch(deleteCar({index}))
        } catch (e) {
            rejectedWithValue(e.message)
        }
    }
)

export const updateCarThunk = createAsyncThunk(
    'carSlice/updateCarThunk',
    async ({id,car}, {dispatch, rejectedWithValue}) => {
        try{
            dispatch(updateCar({car: {...car, id}}))
            return await carsCervices.updateById(id, car);
        }catch (e) {
            rejectedWithValue(e.message)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.car)
        },
        updateCar: (state, action) => {
            state.cars.splice(action.payload.index, 1, action.payload.car);
            state.update = action.payload.car
        },
        deleteCar: (state, action) => {
           state.cars.splice(action.payload.index, 1)
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.error = null;
            state.cars = action.payload.cars;
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },

        [addCarThunk.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [addCarThunk.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.error = null
        },
        [addCarThunk.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        },

        [deleteCarThunk.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null
        },
        [deleteCarThunk.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.error = null;
        },
        [deleteCarThunk.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        },
        [updateCarThunk.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null
        },
        [updateCarThunk.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.error = null;
            state.update = {}
        },
        [updateCarThunk.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        }
    }
})

const carReducer = carSlice.reducer;

export const {addCar, deleteCar, updateCar} = carSlice.actions

export default carReducer