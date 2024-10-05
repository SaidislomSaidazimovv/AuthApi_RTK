import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token") || null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signIn: (state, action: PayloadAction<{token: string}>) => {
            state.token = action.payload.token
        },
        logOut: (state) => {
            state.token = null
        }
    }
})

export default authSlice.reducer;
export const {signIn, logOut} = authSlice.actions;