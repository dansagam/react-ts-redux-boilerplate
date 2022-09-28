import { Theme, Components } from "@mui/material";

export default function Autocomplete(theme: Theme): Components {
  return {
    MuiAutocomplete: {
      defaultProps: {
        multiple: true,
        noOptionsText: "No Option available",
        size: "medium",
        fullWidth: true,
        loadingText: "fetching....",
      },
      styleOverrides: {
        root: {
          fontSize: 14,
          borderRadius: theme.shape.borderRadius * 0.5,
        },
      },
    },
  };
}
