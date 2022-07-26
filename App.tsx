import React from "react";
import {
  Tab,
  Text,
  TabView,
  ThemeProvider,
  Button,
  createTheme,
  useTheme,
} from "@rneui/themed";
import { SafeAreaView, View } from "react-native";
import { HeaderAlpha } from "./app/components/Header";
import OverlayComponent from "./app/components/Overlay";

const theme = createTheme({
  Button: {
    raised: true,
    titleStyle: {
      color: "white",
    },
    type: "solid",
    buttonStyle: {
      margin: 16,
    },
  },
  TabView: {
    tabItemContainerStyle: {},
  },
  lightColors: {
    primary: "tomato",
    secondary: "cyan",
  },
  darkColors: {},
  spacing: {
    lg: 16,
    md: 16,
  },
});

export default () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HeaderAlpha />
        <SafeAreaView>
          <View>
            <OverlayComponent />
          </View>
        </SafeAreaView>
      </ThemeProvider>
    </>
  );
};
