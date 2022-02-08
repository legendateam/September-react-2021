import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {
    IAddCar,
    ISetCars,
    IStateCar,
    IDeleteCar,
    IUpdateCar,
    IUpdateWithIndexCar,
    IDeleteCarWitchIndex}
    from "../../interfaces";
import carService from "../../services/car.service";
import {AsynchronousEventsEnum} from "../../enums";

const initialState:IStateCar = {
    cars: [],
    carUpdate: {},
    index: 0,
    status: null,
    error: null
}

const getAllCarsThunk = createAsyncThunk(
    'carSlice/getAllCarsThunk',
    async (_,{rejectWithValue,dispatch}) => {
        try {
            const {data} = await carService.getAll();
            dispatch(setCars({cars:data}))
        } catch (e) {
            dispatch(errorAction((e as Error).message));
            return rejectWithValue(-1)
        }
    }
)

const addCarThunk = createAsyncThunk<void, IAddCar>(
    'carSlice/addCarThunk',
    async ({car},{dispatch,rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            dispatch(addCar({car:data}))
        } catch (e) {
            dispatch(errorAction(( e as Error).message));
            return rejectWithValue(-1)
        }
    }
)

const updateCarThunk = createAsyncThunk<IAddCar, IUpdateCar>(
    'carSlice/UpdateCarThunk',
    async({id,car}, {dispatch,rejectWithValue}) => {
        try {
            const {data} = await carService.update(id, car);
            return {car:data}
        }catch (e) {
            dispatch(errorAction((e as Error).message));
            return rejectWithValue(-1)
        }
    }
)

const deleteCarThunk = createAsyncThunk<void, IDeleteCar>(
    'carSlice/deleteCarThunk',
    async ({id,index},{dispatch,rejectWithValue}) => {
        try {
            await carService.delete(id);
            dispatch(deleteCar({index}))
        } catch (e) {
            dispatch(errorAction((e as Error).message));
            return rejectWithValue(-1)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCars: (state, action:PayloadAction<ISetCars>) => {
            state.cars = action.payload.cars
        },
        addCar: (state, action:PayloadAction<IAddCar>) => {
            state.cars.push(action.payload.car)
        },
        updateCar: (state, action:PayloadAction<IUpdateWithIndexCar>) => {
            state.carUpdate = action.payload.car;
            state.index = action.payload.index;
        },
        deleteCar: (state, action:PayloadAction<IDeleteCarWitchIndex>) => {
            state.cars.splice(action.payload.index,1)
        },
        errorAction: (state, action:PayloadAction<string>) => {
            state.error = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getAllCarsThunk.pending, state => {
            state.status = AsynchronousEventsEnum.pending;
            state.error = null;
        });
        builder.addCase(getAllCarsThunk.fulfilled, state => {
            state.status = AsynchronousEventsEnum.fulfilled;
            state.error = null
        });
        builder.addCase(getAllCarsThunk.rejected, state => {
            state.status = AsynchronousEventsEnum.rejected;
        });

        builder.addCase(addCarThunk.pending, state => {
            state.status = AsynchronousEventsEnum.pending;
            state.error = null
        });
        builder.addCase(addCarThunk.fulfilled, state => {
            state.status = AsynchronousEventsEnum.fulfilled;
            state.error = null
        });
        builder.addCase(addCarThunk.rejected, state => {
            state.status = AsynchronousEventsEnum.rejected;
        });

        builder.addCase(deleteCarThunk.pending, state => {
            state.status = AsynchronousEventsEnum.pending;
            state.error = null
        });
        builder.addCase(deleteCarThunk.fulfilled, state => {
            state.status = AsynchronousEventsEnum.fulfilled;
            state.error = null;
        });
        builder.addCase(deleteCarThunk.rejected, state => {
            state.status = AsynchronousEventsEnum.rejected;
        });

        builder.addCase(updateCarThunk.pending, state => {
            state.status = AsynchronousEventsEnum.pending;
            state.error = null
        });
        builder.addCase(updateCarThunk.fulfilled, (state , action) => {
            state.status = AsynchronousEventsEnum.fulfilled;
            state.error = null;
            state.cars.splice(state.index,1, action.payload.car)
            state.carUpdate = {}
        });
        builder.addCase(updateCarThunk.rejected, state => {
            state.status = AsynchronousEventsEnum.rejected;
            state.carUpdate = {}
        })
    }
})

const carReducer = carSlice.reducer;

export const {setCars, addCar, updateCar, deleteCar, errorAction} = carSlice.actions;
export {getAllCarsThunk,addCarThunk,updateCarThunk,deleteCarThunk}
export default carReducer
