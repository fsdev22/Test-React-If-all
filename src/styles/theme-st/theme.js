import { createTheme } from "@mui/material/styles";

// visit https://mui.com/material-ui/customization/dark-mode/ for more info
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});
export { darkTheme, lightTheme };
