import { createTheme, alpha, getContrastRatio } from "@mui/material/styles";

const [gambogeBase, gambogeLightest, gambogeLight, gambogeMainD, gambogeDark] =
  ["#E8A901", "#fcf6e5", "#f4db95", "#E8A901", "#a27600"];
const gambogeMain = alpha(gambogeBase, 0.8);

const theme = createTheme({
  palette: {
    primary: {
      lightest: gambogeLightest,
      light: gambogeLight,
      main: gambogeMain,
      dark: gambogeMainD,
      contrastText:
        getContrastRatio(gambogeBase, "#fff") > 4.5 ? "#fff" : "#111",
    },
    secondary: {
      main: "#f50057", // Change the secondary color
    },
  },
  typography: {
    // fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontFamily: "Nunito Sans", //400, 700, 900, 1000
    h1: { fontSize: "2.25em", fontWeight: 1000 },
    h2: {
      fontSize: { xs: "0.1em", sm: "1.75em" },
      fontWeight: 1000,
    },
    h3: {
      fontSize: "1.5em",
      fontWeight: 900,
    },
    h4: {
      fontSize: "1.2em",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1em",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.8em",
      fontWeight: 700, //Regular
    },
    subtitle1: {
      fontSize: "1.2em",
      fontWeight: 900,
    },
    // fontSize: 16, // Change the default font size
  },

  site: {
    name: "Amphaul",
    logo: "logo.webp",
  },

  components: {
    MuiPickersToolbar: {
      styleOverrides: {
        root: {
          color: gambogeMainD,
          borderRadius: 0,
          borderWidth: 0,
          borderColor: "green",
          border: "0px solid",
          backgroundColor: gambogeLight,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          // color: gambogeDark,
          fontSize: "1.2em",
          fontWeight: 900,
          textTransform: "none",
          "&:hover": {
            color: "white",
          },
        },
        contained: {
          padding: "16px 42px",
        },
        outlined: {
          color: gambogeMainD,
          borderColor: gambogeMain,
          "&:hover": {
            color: gambogeDark, // Change the text color on hover for outlined buttons
          },
        },
        text: {
          fontWeight: 700,
          color: gambogeMainD,
          backgroundColor: gambogeLightest,
          "&:hover": {
            color: gambogeDark, // Change the text color on hover for outlined buttons
          },
        },
      },
    },
  },
});

export default theme;

// xs: //0
// sm: //600
// md: //900

// lg: //1200
// xl: //1536
