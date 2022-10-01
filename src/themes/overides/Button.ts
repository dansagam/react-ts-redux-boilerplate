import { Theme, Components } from "@mui/material";
import { pxToRem } from "utils/formatFont";

export default function Button(theme: Theme): Components {
  return {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        size: "medium",
        variant: "contained",
        color: "primary",
      },
      styleOverrides: {
        root: {
          borderRadius: "2px",
          fontWeight: 600,
          "&:hover": {
            boxShadow: "none",
          },
          cursor: "pointer",
        },
        sizeLarge: {
          height: 40,
          fontSize: pxToRem(14),
          lineHeight: "18px",
          padding: theme.spacing(1, 2),
        },
        sizeMedium: {
          height: 35,
          fontSize: pxToRem(14),
          lineHeight: "15px",
          textTransform: "capitalize",
        },
        containedPrimary: {
          boxShadow: "none",
          "&:hover": {
            backgroundColor: theme.palette.primary.light,
          },
          "&:active": {
            backgroundColor: theme.palette.primary.dark,
          },
        },
        containedInherit: {
          boxShadow: "none",
          backgroundColor: "#DEECF9",
          color: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: "#EFF6FC",
          },
          "&:active": {
            backgroundColor: "#DEECF9",
          },
        },
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey.A400}`,
          "&:hover": {
            backgroundColor: "theme.palette.action.hover",
          },
        },
        outlined: {
          background: "white !important",
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        disabled: {
          background: theme.palette.grey.A400,
          color: "#A7A9BC",
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
        size: "medium",
      },
      variants: [
        {
          props: { color: "default" },
          style: {
            "&:hover": { backgroundColor: theme.palette.action.hover },
          },
        },
        {
          props: { color: "inherit" },
          style: {
            "&:hover": { backgroundColor: theme.palette.action.hover },
          },
        },
      ],
    },
  };
}
