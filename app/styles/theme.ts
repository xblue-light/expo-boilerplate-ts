import { createTheme } from "@rneui/themed";

export const alphaTheme = createTheme({
  Button: {
    raised: false,
    titleStyle: {
      color: "white",
      textTransform: "uppercase",
    },
    type: "solid",
    buttonStyle: {
      margin: 8,
      width: "100%",
    },
  },
  TabView: {
    tabItemContainerStyle: {},
  },
  lightColors: {
    primary: "#757ce8",
    secondary: "#ff7961",
  },
  darkColors: {
    primary: "#002884",
    secondary: "#ba000d",
  },
  spacing: {
    lg: 18,
    md: 18,
  },
});
