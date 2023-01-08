import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { sirokoTheme } from "./sirokoTheme";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={sirokoTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
