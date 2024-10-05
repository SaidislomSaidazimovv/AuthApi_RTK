import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/auth";
import { api } from "../api";

const store = configureStore({
    reducer: {
        auth: authReducer,
        [api.reducerPath] : api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store