import { ApiResponsePagination } from "interfaces/basicInterface";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  accessToken: string;
  refreshToken: string;
}

export interface IUser {
  firstname: string;
  lastname: string;
}

export interface IUserLists extends ApiResponsePagination {
  results: IUser[] | [];
}

export interface ICreatePasswordPayload {
  token: string;
  password: string;
}

export interface ICreatePasswordResponse {
  token: string;
  password: string;
}

export interface IResetPasswordPayload {
  email: string;
}

export interface IResetPasswordResponse {
  email: string;
}
