import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false,
    user: null,
};

export const userSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isLogin = true;
            state.user = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { loginSuccess } = userSlice.actions;

export default userSlice.reducer;
