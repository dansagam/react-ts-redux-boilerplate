import { createSlice } from "@reduxjs/toolkit";
import { BaseAppStoreState } from "interfaces/storeInterface";
import Auth, { IUserDecoded } from "stores/Auth";
import { IUser, LoginRequest, LoginResponse } from "stores/interfaces/userInterfaces";
import { LOADING, pending } from "stores/thunks/baseReducer";
import { baseThunkMethod } from "stores/thunks/baseThunkMethod";

export const getAllAuth = baseThunkMethod<IUser, void>("getAllAuth");
export const loginuser = baseThunkMethod<LoginResponse, LoginRequest>("loginuser");

interface AppInitial extends BaseAppStoreState {
  user: IUser | null;
  users: IUser[];
  decodedUser: IUserDecoded | null;
}
const initialState: AppInitial = {
  user: null,
  users: [],
  decodedUser: null,
  loading: "idle",
  error: null,
  status: "",
  loaded: [],
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

    builder.addCase(getAllAuth.pending, pending("pending"));

    builder.addCase(loginuser.fulfilled, (state, action) => {
      Auth.setToken(action.payload.accessToken);
      Auth.setRefreshToken(action.payload.refreshToken);
      state.decodedUser = Auth.getDecodedJwt(action.payload.accessToken);
      state.error = null;
      if (state.loaded.includes("decodedUser")) {
        state.loaded.push("decodedUser");
      }
      state.loading = LOADING.IDLE;
    });

    builder.addCase(loginuser.pending, pending("pending"));
  },
});

export const { genOut } = generalSlice.actions;
export default generalSlice.reducer;

// export const
