import {configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./carSlice";

const store = configureStore({
    reducer: {
        carReducer
    }
})

export default store