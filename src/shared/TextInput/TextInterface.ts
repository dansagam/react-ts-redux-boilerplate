/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, FieldValues } from "react-hook-form/dist/types";

// type FieldTpe = {
//   [x: string]: any;
// };
export interface ITextField {
  helperText?: string;
  errors: { [x: string]: { message: string } };
  control: Control<FieldValues, any>;
  name: string;
  label?: string;
  type?:
    | "text"
    | "password"
    | "number"
    | "button"
    | "checkbox"
    | "date"
    | "email"
    | "file"
    | "search"
    | "submit";
  // errors: FieldErrors<FieldValues, any>;
}
