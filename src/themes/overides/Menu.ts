import { Components } from "@mui/material";

export default function Menu(): Components {
  return {
    MuiMenu: {
      defaultProps: {
        open: false,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      },
    },
  };
}
