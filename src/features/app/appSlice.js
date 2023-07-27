import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpenSetting: false,
};

export const appSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        toggleSetting: (state) => {
            state.isOpenSetting = !state.isOpenSetting;
        },
    },
});

export const { toggleSetting } = appSlice.actions;

export default appSlice.reducer;
