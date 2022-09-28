import { Theme, Components } from "@mui/material";

export default function Paper(theme: Theme): Components {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          boxShadow: theme.shadows[16],
          borderRadius: "4px",
          zIndex: 0,
        },
      },
    },
  };
}
