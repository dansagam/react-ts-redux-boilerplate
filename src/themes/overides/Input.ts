import { Theme, Components } from "@mui/material";

export default function Input(theme: Theme): Components {
  return {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "medium",
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius * 0.5,
          paddingRight: 5,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.grey.A200,
          },
          "&.Mui-disabled": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.grey.A200,
            },
          },
          textAlign: "left",
        },
      },
    },
    MuiInput: {
      defaultProps: {
        size: "medium",
        fullWidth: true,
      },
      styleOverrides: {
        input: {
          fontSize: 14,
          lineHeight: 1.5,
        },
        inputMultiline: {
          fontSize: 14,
        },
      },
    },
  };
}
