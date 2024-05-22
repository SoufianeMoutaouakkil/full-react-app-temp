import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import usersApiReducer from "./apis/usersApi";
import authReducer from "./apis/authApi";
import examplesSlice from "./slices/examplesSlice";

export default configureStore({
    reducer: combineReducers({
        auth: authReducer,
        usersApi: usersApiReducer,
        examples: examplesSlice,
    }),
});
