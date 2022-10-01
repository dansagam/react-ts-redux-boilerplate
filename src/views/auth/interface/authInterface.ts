import { ReactNode } from "react";
import { UseFormRegister } from "react-hook-form/dist/types";

export interface IAuthLayout {
  title: string;
  subtile: string;
  mainTitle: string;
  children: ReactNode;
  btnText?: string;
  footerNode?: ReactNode;
  onAction?: () => void;
  // onAction: React.FormEventHandler<HTMLFormElement> | React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
}

export interface LoginFieldTypes {
  email: string;
  password: string;
}

export interface ILogin {
  register: UseFormRegister<LoginFieldTypes>;
}

export interface IResetPassword {
  password: string;
  confirmPassword: string;
  token?: string;
}
