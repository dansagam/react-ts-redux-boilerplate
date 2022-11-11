/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import authGeneral from "stores/services/auth";

export type ApiFunc = <RS, RQ>(value: RQ) => Promise<AxiosResponse<RS>>;

export const baseApi: Record<string, ApiFunc> = {
  getAllAuth: authGeneral.getAllAuth,
  loginuser: authGeneral.loginUser,
  createPassword: authGeneral.createPassword,
};

export const baseThunkMethod = <RS, RQ>(actionName: string) =>
  createAsyncThunk<
    RS,
    RQ
    // { rejectValue: string }
  >(actionName, async (payload, { ...thunkAPi }) => {
    try {
      const response = await baseApi[actionName]<RS, RQ>(payload);
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return thunkAPi.rejectWithValue(err.response);
      }
      return thunkAPi.rejectWithValue(err);
    }
  });
