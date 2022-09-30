import { ReactNode } from "react";

export interface IAuthLayout {
  title: string;
  subtile: string;
  mainTitle: string;
  children: ReactNode;
  btnText: string;
  footerNode?: ReactNode;
  onAction: () => void;
  // onAction: React.FormEventHandler<HTMLFormElement> | React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
}
