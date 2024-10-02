import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHighlightOn: false,
};

const toggleSlice = createSlice({
  name: "isHighlightOn",
  initialState,
  reducers: {
    toggleHighlight: (state) => {
      state.isHighlightOn = !state.isHighlightOn;
    },
  },
});

export const { toggleHighlight } = toggleSlice.actions;

const toggleReducer = toggleSlice.reducer;

export default toggleReducer;
