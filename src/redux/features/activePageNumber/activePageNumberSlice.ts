import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type activePageNumberSlice = {
  activePageNumber: number;
};

const initialState = {
  activePageNumber: 1,
} as activePageNumberSlice;

export const activePageNumberSlice = createSlice({
  name: "activePageNumber",
  initialState,
  reducers: {
    updateActivePageNumber: (state, action: PayloadAction<number>) => {
      state.activePageNumber = action.payload;
    },
  },
});

export const { updateActivePageNumber } = activePageNumberSlice.actions;
export default activePageNumberSlice.reducer;
