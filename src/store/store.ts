import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./features/userSlice";
import { usersApi } from "../services/user.service";
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    // user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
