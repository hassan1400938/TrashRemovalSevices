import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5", // Change the primary color
    },
    secondary: {
      main: "#f50057", // Change the secondary color
    },
  },
  typography: {
    fontSize: 16, // Change the default font size
  },
});

export default theme;
