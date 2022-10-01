import TextField from "@mui/material/TextField/TextField";
import React from "react";
import { ILogin } from "views/auth/interface/authInterface";

const SignInForm = ({ register }: ILogin) => {
  return (
    <>
      <div>
        <TextField {...register("email")} label="Username" />
      </div>
      <div>
        <TextField type="password" {...register("password")} label="Password" />
      </div>
    </>
  );
};

export default SignInForm;
