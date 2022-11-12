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

export type DD = <T>() => Extract<T, BaseAppStoreState>;

export const fulfilled =
  <T extends BaseAppStoreState>(actionType: keyof Omit<T, keyof BaseAppStoreState>) =>
  (state: T, action: PayloadAction<T[typeof actionType]>) => {
    state.loading = LOADING.IDLE;
    state.error = null;
    state[actionType] = action.payload;
  };
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const withBase = <T extends BaseAppStoreState>() => {
  return (x: keyof Omit<T, keyof BaseAppStoreState>) => ({ data: typeof x });
};

// const hhf = withBase<Record<string, string>>();
// typeof hhf("string").data;
declare function f1<T extends BaseAppStoreState>(
  x: keyof Omit<T, keyof BaseAppStoreState>
): { data: T[typeof x] };

export const fulfilledTest =
  <T extends BaseAppStoreState>(actionType: keyof Omit<T, keyof BaseAppStoreState>) =>
  (state: T, action: PayloadAction<ReturnType<typeof f1<T>>>) => {
    state.loading = LOADING.IDLE;
    state.error = null;
    state[actionType] = action.payload.data;
  };

export const jhd = 333;

// interface GG extends BaseAppStoreState {
//   dd: string;
// }

export type Dok<K extends BaseAppStoreState> = { [Property in keyof K]: K[Property] };

interface Gf extends BaseAppStoreState {
  milk: string;
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const FO: Dok<Gf> = {
  milk: "d",
  status: "",
  loaded: [],
  loading: "finished",
  error: null,
};
