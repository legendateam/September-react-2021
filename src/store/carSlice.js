import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carsCervices} from "../services";

const initialState = {
    cars: [],
    carUpdate: {},
    index: null,
    status: null,
    error: null
}

const getAllCarsThunk = createAsyncThunk(
    'carSlice/getAllCarsThunk',
    async (_,{rejectWithValue}) => {
        try{
            const cars = await carsCervices.getAll();
            return {cars}
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const addCarThunk = createAsyncThunk(
    'carSlice/addCarThunk',
    async ({car}, {dispatch,rejectWithValue}) => {
        try {
            const newCar = await carsCervices.create(car)
            dispatch(addCar({car:newCar}))
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const updateCarThunk = createAsyncThunk(
    'carSlice/updateCarThunk',
    async ({id, car},{rejectWithValue}) => {
        try{
            const carUpdate = await carsCervices.updateById(id, car);
            return {carUpdate}
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const deleteCarThunk = createAsyncThunk(
     'carSlice/deleteCarThunk',
    async ({id, index}, {dispatch, rejectWithValue}) => {
         try {
             await carsCervices.deleteById(id)
             dispatch(deleteCar({index}))
         } catch (e) {
             return rejectWithValue(e.message)
         }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.car);
        },
        updateCar: (state, action) => {
            state.carUpdate = action.payload.car
        },
        deleteCar: (state, action) => {
            state.cars.splice(action.payload.index, 1)
        },
        getIndex: (state, action) => {
            state.index = action.payload.index
        }
    },
    extraReducers: {
        [getAllCarsThunk.pending]: state => {
            state.status = 'pending';
            state.error = null
        },
        [getAllCarsThunk.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.cars = action.payload.cars
        },
        [getAllCarsThunk.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        },

        [addCarThunk.pending]: state => {
            state.status = 'pending';
        },
        [addCarThunk.fulfilled]: state => {
            state.status = 'fulfilled';
            state.error = null
        },
        [addCarThunk.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        },

        [updateCarThunk.fulfilled]: (state, action) => {
          state.status = 'fulfilled';
          state.error = null;
          state.cars.splice(state.index, 1, action.payload.carUpdate);
          state.carUpdate = {}
        },
        [updateCarThunk.rejected]: (state, action) => {
            state.status = 'rejected';
            state.carUpdate = {}
            state.error = action.payload;
        },

        [deleteCarThunk.fulfilled]: state => {
            state.status = 'fulfilled'
            state.erorr = null
        },
        [deleteCarThunk.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        }
    }
})

export const carReducer = carSlice.reducer;
export const {addCar, updateCar, deleteCar, getIndex} = carSlice.actions;
export {getAllCarsThunk, addCarThunk, deleteCarThunk,updateCarThunk}