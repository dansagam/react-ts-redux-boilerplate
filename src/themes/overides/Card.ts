import { Theme, Components } from "@mui/material";

export default function Card(theme: Theme): Components {
  return {
    MuiCard: {
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
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0),
        },
        title: {},
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3),
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        img: {
          width: "100%",
        },
      },
    },
  };
}
