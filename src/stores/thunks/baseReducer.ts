/* eslint-disable @typescript-eslint/no-explicit-any */

import { PayloadAction } from "@reduxjs/toolkit";
import { AppLoading, BaseAppStoreState } from "interfaces/storeInterface";

type LoadingTypes = {
  IDLE: "idle";
  PENDING: "pending";
  FINISHED: "finished";
};

export const LOADING: LoadingTypes = {
  IDLE: "idle",
  PENDING: "pending",
  FINISHED: "finished",
};

export const pending =
  <T extends BaseAppStoreState>(type: AppLoading) =>
  (state: T) => {
    state.loading = type || LOADING.PENDING;
  };
// type GG = <T>() => Extract<T, BaseAppStoreState>;
export const fulfilled =
  <T extends BaseAppStoreState>(actionType: keyof T) =>
  (state: T, action: PayloadAction<T[typeof actionType]>) => {
    state.loading = LOADING.IDLE;
    state.error = null;
    state[actionType] = action.payload;
  };

export const fulfilledTest =
  <T extends BaseAppStoreState>(actionType: keyof T) =>
  (state: T, action: PayloadAction<T[typeof actionType]>) => {
    state.loading = LOADING.IDLE;
    state.error = null;
    state[actionType] = action.payload;
  };

export const jhd = 333;

interface GG extends BaseAppStoreState {
  dd: string;
}

fulfilled<GG>("dd");
