import { configureStore } from "@reduxjs/toolkit";
import activeNavReducer from "../features/activeNav/activeNavSlice";
import activePageNumberReducer from "../features/activePageNumber/activePageNumberSlice"
const store = configureStore({
  reducer: {
    activeNav: activeNavReducer,
    activePageNumber: activePageNumberReducer
  },
  devTools: process.env.NODE_ENV === "development",
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
