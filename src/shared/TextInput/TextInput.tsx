import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import React from "react";
import { Controller } from "react-hook-form";
import { ITextField } from "./TextInterface";

const TextInput = ({ control, helperText, name, label, errors, type, ...rest }: ITextField) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { ref, ...fields }, fieldState: { error } }) => (
        <FormControl
          data-testid="reusable-text-input-control"
          fullWidth
          margin="none"
          error={!!errors?.[name]}
        >
          <TextField
            data-testid="reusable-text-input"
            inputRef={ref}
            {...fields}
            error={Boolean(error?.message)}
            label={label}
            inputProps={{
              "aria-label": label,
            }}
            type={type || "text"}
            {...rest}
          />
          {(helperText || errors?.[name]) && (
            <FormHelperText
              data-testid="reusable-text-input-message"
              error={!!error?.message}
              component="span"
            >
              {errors?.[name]?.message || helperText || ""}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};

export default TextInput;
