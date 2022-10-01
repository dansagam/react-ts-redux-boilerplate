import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const loginResolver = yupResolver(loginSchema);
