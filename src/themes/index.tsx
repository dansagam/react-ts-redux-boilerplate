import React from "react";
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import jssPreset from "@mui/styles/jssPreset";
import StylesProvider from "@mui/styles/StylesProvider";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { create } from "jss";
import jssPluginSyntaxExtend from "jss-plugin-extend";
import GlobalStyles from "./GlobalStyles";
import palette from "./palette";
import breakpoints from "./breakpoints";
import shape from "./shape";
import shadows from "./shadows";
import typography from "./typography";
import ComponentOverides from "./overides";

const jss = create({
  plugins: [...jssPreset().plugins, jssPluginSyntaxExtend()],
});

interface IThemes {
  children: React.ReactNode;
}

function ThemeConfig({ children }: IThemes) {
  const themeOptions = React.useMemo<ThemeOptions>(
    () => ({
      palette,
      breakpoints,
      shape,
      shadows,
      typography,
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = ComponentOverides(theme);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StylesProvider jss={jss}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </StyledEngineProvider>
      </StylesProvider>
    </LocalizationProvider>
  );
}

export default ThemeConfig;
