import { Theme, Components } from "@mui/material";

export default function Typography(theme: Theme): Components {
  return {
    MuiTypography: {
      defaultProps: {
        variant: "body1",
      },
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      },
    },
  };
}
