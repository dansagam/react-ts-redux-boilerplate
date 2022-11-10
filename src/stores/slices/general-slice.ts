import { createSlice } from "@reduxjs/toolkit";
import { BaseAppStoreState } from "interfaces/storeInterface";
import { baseThunkMethod } from "stores/thunks/baseThunkMethod";

export const getAllAuth = baseThunkMethod("getAllAuth");

interface AppInitial extends BaseAppStoreState {
  user: { [x: string]: string };
  users: { [x: string]: string }[];
}
const initialState: AppInitial = {
  user: {},
  users: [],
  loading: "idle",
  error: null,
  status: "",
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    genOut: (state, action) => {
      return {
        ...state,
        users: action.payload,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllAuth.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(getAllAuth.pending, (state) => {
      state.loading = "pending";
    });
  },
});

export const { genOut } = generalSlice.actions;
export default generalSlice.reducer;

// export const
