import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";
import themeReducer from "./themeSlice";

const store = configureStore({
  reducer: { toggle: toggleReducer, theme: themeReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
