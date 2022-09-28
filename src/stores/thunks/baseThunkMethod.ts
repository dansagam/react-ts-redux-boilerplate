import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import authGeneral from "stores/services/auth";

export type ApiFunc = (value: any) => Promise<any>;

export const baseApi: Record<string, ApiFunc> = {
  loginUser: authGeneral.getAllAuth,
};

export const baseThunkMethod = (actionName: string) =>
  createAsyncThunk(actionName, async (payload, { rejectWithValue }) => {
    try {
      const { data } = await baseApi[actionName](payload);
      return data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response);
      }
      return rejectWithValue(err);
    }
  });
