import { createTheme, alpha, getContrastRatio } from "@mui/material/styles";

const [ blueLightest, blueLight, blueBase, blueBaseD, blueDark, themeGreen, themeOrange] =
  [ "#e6eaec", "#cdd5da","#092E47", "#214259", "#01090e", "#A8B66B", '#CB773B'];
// const blueMain = alpha(blueBase, 0.8);

const theme = createTheme({
  palette: {
    primary: {
      lightest: blueLightest,
      light: blueLight,
      main: blueBase,
      dark: blueBaseD,
      white: "#fff",
      green: themeGreen,
      orange: themeOrange,
      contrastText:
        getContrastRatio(blueBase, "#fff") > 4.5 ? "#fff" : "#000",
    },
    secondary: {
      main: "#A8B66B", // Change the secondary color
    },
  },
  typography: {
    // fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontFamily: "Nunito Sans", //400, 700, 900, 
    h1: {
      fontSize: "3em",
      // fontSize: { xs: "0.2em", sm: "0.2em", md: "70px", lg: "5em" },
      fontWeight: 1000,
      color: blueBase
    },
    h2: {
      fontSize: "2.5em",
      // fontSize: { xs: "0.1em", sm: "1.75em" },
      fontWeight: 1000,
      color: blueBase
    },
    h3: {
      fontSize: "1.5em",
      fontWeight: 900,
      color: blueBase
    },
    h4: {
      // fontSize: "1.2em",
      fontWeight: 700,
      color: blueBase
    },
    body1: {
      fontSize: "1em",
      fontWeight: 400,
      color: blueBase
    },
    body2: {
      fontSize: "0.8em",
      fontWeight: 700, //Regular
      color: blueBase
    },
    subtitle1: {
      fontSize: "1.2em",
      fontWeight: 600,
      lineHeight: "1.2em",
      color: blueBase
    },
    subtitle2: {
      fontSize: "1.2em",
      fontWeight: 400,
      lineHeight: "1.2em",
      color: blueBase
    },
    // fontSize: 16, // Change the default font size
  },

  site: {
    name: "junk Booking Pro",
    logo: "logo2.png",
  },

  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow:
            "0px 2px 4px 0px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.14)",
          // boxShadow:
          //   "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",

          marginTop: "10px",
        },
      },
    },

    MuiPickersToolbar: {
      styleOverrides: {
        root: {
          color: blueBaseD,
          borderRadius: 0,
          borderWidth: 0,
          borderColor: "green",
          border: "0px solid",
          backgroundColor: blueLight,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "4px 16px",
          boxShadow: "none",
          // color: blueDark,
          // backgroundColor:themeOrange,
          fontSize: "1.2em",
          fontWeight: "bold",
          textTransform: "none",
          "&:hover": {
            color: "white",
          },
        },
        contained: {
          // padding: "4px 16px",
        },
        outlined: {
          color: blueBaseD,
          borderColor: blueBase,
          "&:hover": {
            color: blueDark, // Change the text color on hover for outlined buttons
          },
        },
        text: {
          fontWeight: 700,
          color: blueBaseD,
          backgroundColor: blueLightest,
          "&:hover": {
            color: blueDark, // Change the text color on hover for outlined buttons
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

// @media only screen and (min-width: 751px) {
//   .hero_section {
//     background-image: url('https://static.wixstatic.com/media/1147e7_e863a7d8c6bc42418e34e13c9c4eddc5~mv2.webp');
//   }
// }

//  @media only screen and (max-width: 750px) {
//   .hero_section {
//     background-image: url('https://static.wixstatic.com/media/1147e7_9a25bbc292ce4ae0b57d70ec69c4cf8e~mv2.webp') !important;
//     background-position: center;
//     background-repeat: no-repeat;
// }
// }
