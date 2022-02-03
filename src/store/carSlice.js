import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carsCervices} from "../services";

const initialState = {
    cars: [],
    carUpdate: {},
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
            rejectWithValue(e.message)
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
            rejectWithValue(e.message)
        }
    }
)

const updateCarThunk = createAsyncThunk(
    'carSlice/updateCarThunk',
    async ({car, id},{dispatch, rejectWithValue}) => {
        try{
            await carsCervices.updateById(id, car)
            dispatch(updateCar({car:{...car,id}}))
        } catch (e) {
            rejectWithValue(e.message)
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
             rejectWithValue(e.message)
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
            console.log(action.payload.index);
            console.log(action.payload.car);
            state.cars.splice(action.payload.index, 1, action.payload.car)
            state.carUpdate = action.payload.car
        },
        deleteCar: (state, action) => {
            state.cars.splice(action.payload.index, 1)
        }
    },
    extraReducers: {
        [getAllCarsThunk.pending]: state => {
            state.status = 'pending';
            state.error = null
        },
        [getAllCarsThunk.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.error = null;
            state.cars = action.payload.cars
        },
        [getAllCarsThunk.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        },

        [addCarThunk.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },

        [updateCarThunk.fulfilled]: state => {
          state.status = 'fulfilled';
          state.error = null;
          state.carUpdate = {}
        },

        [updateCarThunk.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        },

        [deleteCarThunk.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        }
    }
})

export const carReducer = carSlice.reducer;
export const {addCar, updateCar, deleteCar} = carSlice.actions;
export {getAllCarsThunk, addCarThunk, deleteCarThunk,updateCarThunk}