import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const sirokoTheme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#339b95",
    },
    error: {
      main: red.A400,
    },
    text: {
      main: "#000",
    },
  },
});
