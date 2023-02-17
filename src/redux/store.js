import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './slice/users'


export const store = configureStore({
    reducer: {
        user: usersReducer
    }
});