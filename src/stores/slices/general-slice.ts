import { createSlice } from "@reduxjs/toolkit";

const generalSlice = createSlice({
  name: "general",
  initialState: [2],
  reducers: {
    genOut: () => [1],
  },
});

export const { genOut } = generalSlice.actions;
export default generalSlice.reducer;

// export const
