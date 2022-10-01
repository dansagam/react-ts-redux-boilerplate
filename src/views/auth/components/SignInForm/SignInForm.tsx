import TextField from "@mui/material/TextField/TextField";
import React from "react";
import Button from "@mui/material/Button";
import { LoginFieldTypes } from "views/auth/interface/authInterface";
import { useForm, Controller } from "react-hook-form";
import { loginDefaultValues, loginResolver } from "views/auth/validators";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignInForm = () => {
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
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <div>
          <Controller
            control={control}
            name="email"
            render={({ field: { ref, ...fields }, fieldState: { error } }) => (
              <TextField
                inputRef={ref}
                {...fields}
                label="Username"
                error={!!error?.message}
                helperText={error?.message}
              />
            )}
          />
        </div>
        <div>
          <Controller
            control={control}
            name="password"
            render={({ field: { ref, ...fields }, fieldState: { error } }) => (
              <TextField
                inputRef={ref}
                {...fields}
                label="Username"
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
              />
            )}
          />
        </div>
      </Box>
      <Button
        color="primary"
        type="submit"
        fullWidth
        disabled={loading}
        startIcon={
          loading && (
            <CircularProgress
              size={16}
              sx={{
                fontSize: 1,
              }}
            />
          )
        }
        // onClick={() => setShowPassword(true)}
        sx={{
          mt: 1,
        }}
      >
        {loading ? "Signing...." : "Sign in"}
      </Button>
    </Box>
  );
};

export default SignInForm;
