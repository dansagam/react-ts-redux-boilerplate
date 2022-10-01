/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useForm, Controller } from "react-hook-form";
import AuthLayout from "views/auth/components/AuthLayout";
import { LoginFieldTypes } from "views/auth/interface/authInterface";
import { loginDefaultValues, loginResolver } from "views/auth/validators";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { pxToRem } from "utils/formatFont";

const SignIn = (): JSX.Element => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const { handleSubmit, control } = useForm<LoginFieldTypes>({
    resolver: loginResolver,
    defaultValues: loginDefaultValues,
  });
  const onSubmit = (data: LoginFieldTypes) => {
    setLoading(true);
    // eslint-disable-next-line no-console
    console.log({ data });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <AuthLayout
      title=" General Page"
      subtile="This is dummy text that will be replaced later by proper content. 
      The replacement text shouldn't be more than three lines"
      mainTitle=" Set your password to complete your account creation"
      btnText={loading ? "Signing...." : "Signin"}
      onAction={handleSubmit(onSubmit)}
      loading={loading}
      footerNode={
        <Box sx={{ fontSize: pxToRem(12), lineHeight: 1.5 }}>
          <Typography
            variant="subtitle1"
            mt={2}
            color="text.main"
            sx={{ "& .Typography-root": { fontSize: pxToRem(12), lineHeight: 1.5 } }}
          >
            By signing in, you are agreeing to our{" "}
            <Typography component={Link} to="/" color="primary.main">
              Terms & Conditions
            </Typography>{" "}
            and{" "}
            <Typography component={Link} to="/" color="primary.main">
              Privacy Policy
            </Typography>{" "}
          </Typography>
        </Box>
      }
    >
      <Box>
        <Controller
          control={control}
          name="email"
          render={({ field: { ref, ...fields }, fieldState: { error } }) => (
            <TextField
              inputRef={ref}
              label="Email Address"
              placeholder="example@mail.com"
              error={!!error?.message}
              helperText={error?.message}
              {...fields}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { ref, ...fields }, fieldState: { error } }) => (
            <TextField
              inputRef={ref}
              label="password"
              type={showPassword ? "text" : "password"}
              error={!!error?.message}
              helperText={error?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...fields}
            />
          )}
        />
        <Typography
          component={Link}
          to="/forgot-password"
          variant="body1"
          color="primary.main"
          lineHeight={1.5}
          my={1}
        >
          Forgot Password
        </Typography>
      </Box>
    </AuthLayout>
  );
};

export default SignIn;
