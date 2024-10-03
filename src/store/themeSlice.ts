import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setInitialTheme(state) {
      if (typeof window !== "undefined") {
        state.isDarkMode = localStorage.getItem("bolha:isDarkMode") === "true";
      }
    },
    themeSwitcher(state) {
      state.isDarkMode = !state.isDarkMode;
      if (typeof window !== "undefined") {
        localStorage.setItem("bolha:isDarkMode", state.isDarkMode.toString());
      }
    },
  },
});

export const { themeSwitcher, setInitialTheme } = themeSlice.actions;

const themeReducer = themeSlice.reducer;

export default themeReducer;
