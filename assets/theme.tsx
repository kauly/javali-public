export default {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  space: [0, 4, 8, 16, 20, 32, 64, 128, 256],
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em"
  },
  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Roboto', sans-serif"
  },
  colors: {
    text: "#000",
    background: "#fff",
    navbarBg: "#d2dae2",
    searchBg: "#808e9b"
  },
  buttons: {
    primary: {
      color: "white",
      bg: "black",
      fontFamily: "body",
      fontSize: 1,
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "caps",
      ":hover": {
        cursor: "pointer"
      }
    },
    outline: {
      color: "black",
      bg: "white",
      border: "1px solid black",
      fontFamily: "body",
      fontSize: 1,
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "caps",
      ":hover": {
        cursor: "pointer"
      }
    }
  },

  text: {
    navLink: {
      letterSpacing: "caps",
      fontSize: 2,
      fontWeight: "bold",
      textTransform: "uppercase",
      fontFamily: "body",
      ":hover": {
        cursor: "pointer"
      }
    },
    headers: {
      textTransform: "uppercase",
      letterSpacing: "caps",
      fontFamily: "body",
      marginBottom: [3, 6, 6],

      textAlign: "center"
    },
    normal: {
      fontFamily: "body",
      fontSize: 2,
      letterSpacing: "body",
      lineHeight: "body"
    }
  }
};
