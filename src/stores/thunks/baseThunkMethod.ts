/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import authGeneral from "stores/services/auth";

export type ApiFunc = (value: any) => Promise<any | AxiosResponse>;

export const baseApi: Record<string, ApiFunc> = {
  getAllAuth: authGeneral.getAllAuth,
};

export const baseThunkMethod = (actionName: string) =>
  createAsyncThunk(actionName, async (payload, { ...thunkAPi }) => {
    try {
      const { data } = await baseApi[actionName](payload);
      return data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return thunkAPi.rejectWithValue(err.response);
      }
      return thunkAPi.rejectWithValue(err);
    }
  });
