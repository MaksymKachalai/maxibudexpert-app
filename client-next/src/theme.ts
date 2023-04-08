import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: '#121212',
    },
    primary: {

      main: "#a74d4a",
    },
    secondary: {
      main: '#FFB84C',

    },
  },
  typography: {
    fontFamily: ['Roboto', 'Montserrat', 'sans-serif'].join(','),
  },
});

export default theme;