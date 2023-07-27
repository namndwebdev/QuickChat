import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import appSlice from "../features/app/appSlice";

const persistConfig = {
    key: "auth",
    storage,
    whitelist: ["isLogin", "user"],
};

const persistedReducerUser = persistReducer(persistConfig, userSlice);

export const store = configureStore({
    reducer: {
        user: persistedReducerUser,
        app: appSlice,
    },
    middleware: [thunk],
});

export const persistor = persistStore(store);
