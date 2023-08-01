import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpenSetting: false,
    toggleSideBar: true,
};

export const appSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        toggleSetting: (state) => {
            state.isOpenSetting = !state.isOpenSetting;
        },
        toggleSideBarFunc: (state) => {
            state.toggleSideBar = !state.toggleSideBar;
        },
    },
});

export const { toggleSetting, toggleSideBarFunc } = appSlice.actions;

export default appSlice.reducer;
