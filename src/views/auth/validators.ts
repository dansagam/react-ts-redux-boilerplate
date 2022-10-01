import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { password } from "utils/formValidation";
// import { IResetPassword } from "./interface/authInterface";

export const loginDefaultValues = {
  email: "",
  password: "",
};

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const loginResolver = yupResolver(loginSchema);

export const resetPasswordDefaultValues = {
  password: "",
  confrmPassword: "",
};

export const resetPasswordSchema = Yup.object({
  password: Yup.string()
    .required("Password is required")
    .test({
      message: "Password not valid",
      test: (value) =>
        value
          ? !password.validate.hasAnUppercase(value) &&
            !password.validate.hasEightOrMoreCharacters(value) &&
            !password.validate.hasLowercase(value) &&
            !password.validate.hasNumber(value)
          : false,
    }),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .when("password", (password1, scma) =>
      password
        ? scma.test({
            message: "Password not same",
            test: (val: string) => val === password1,
          })
        : scma.required()
    )
    .test({
      message: "Password not valid",
      test: (value) =>
        value
          ? !password.validate.hasAnUppercase(value) &&
            !password.validate.hasEightOrMoreCharacters(value) &&
            !password.validate.hasLowercase(value) &&
            !password.validate.hasNumber(value)
          : true,
    }),
});

export const resetPasswordResolver = yupResolver(resetPasswordSchema);
