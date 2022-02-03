import {configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./carSlice";
import {userReducer} from "./userSlice";
import postReducer from "./postSlice";
import {commentReducer} from "./commentSlice";

const store = configureStore({
    reducer: {
        carReducer,
        userReducer,
        postReducer,
        commentReducer
    }
})

export default store