export type AppLoading = "idle" | "pending" | "finished" | "succeeded" | "failed";

export interface BaseAppStoreState {
  status: string;
  loading: AppLoading;
  error: string | null;
  loaded: string[];
}
