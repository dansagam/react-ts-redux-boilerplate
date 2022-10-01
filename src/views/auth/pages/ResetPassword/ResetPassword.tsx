import React from "react";
import { useForm, Controller } from "react-hook-form";
import AuthLayout from "views/auth/components/AuthLayout";
import Box from "@mui/material/Box";
import { IResetPassword } from "views/auth/interface/authInterface";
import { useSearchParams } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import { password as checkPassword } from "utils/formValidation";
import { PasswordCheck } from "shared";
import { resetPasswordDefaultValues, resetPasswordResolver } from "views/auth/validators";

const ResetPassword = () => {
  const { handleSubmit, control, watch } = useForm<IResetPassword>({
    defaultValues: resetPasswordDefaultValues,
    resolver: resetPasswordResolver,
  });
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState<boolean>(false);
  const [searchToken] = useSearchParams();
  const token = searchToken.get("token");
  const [loading, setLoading] = React.useState<boolean>(false);
  const { password = "" } = watch();
  // const rules = requiredFields(["password"]);

  const onSubmit = (data: IResetPassword) => {
    setLoading(true);
    // eslint-disable-next-line no-console
    console.log({ data, token });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibilityConfirm = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const renderPasswordCheck = () => {
    const checks = [
      {
        label: "Uppercase",
        isValid: !checkPassword.validate.hasAnUppercase(password),
      },
      {
        label: "Lowercase",
        isValid: !checkPassword.validate.hasLowercase(password),
      },
      {
        label: "At least 1 number",
        isValid: !checkPassword.validate.hasNumber(password),
      },
      {
        label: "8 or more characters",
        isValid: !checkPassword.validate.hasEightOrMoreCharacters(password),
      },
    ];

    return checks.map(({ label, isValid }) => (
      <PasswordCheck key={label} label={label} isValid={isValid} />
    ));
  };

  return (
    <AuthLayout
      mainTitle="Set your password to complete your account creation"
      title="General Page"
      subtile="This is dummy text that will be replaced later by proper content. The replacement text shouldn’t be more than three lines"
      onAction={handleSubmit(onSubmit)}
      btnText={loading ? "reseting..." : "Create password"}
      loading={loading}
    >
      <Box>
        <Controller
          control={control}
          name="password"
          render={({ field: { ref, ...fields }, fieldState: { error } }) => (
            <TextField
              label="Password"
              inputRef={ref}
              error={!!error?.message}
              type={showPassword ? "text" : "password"}
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
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { ref, ...fields }, fieldState: { error } }) => (
            <TextField
              label="Confirm Password"
              inputRef={ref}
              type={showConfirmPassword ? "text" : "password"}
              error={!!error?.message}
              helperText={error?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibilityConfirm}>
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...fields}
            />
          )}
        />
        <Box className="password-check">{renderPasswordCheck()}</Box>
      </Box>
    </AuthLayout>
  );
};

export default ResetPassword;
