import * as React from "react";
import { ThemeProvider } from "@rneui/themed";
import { alphaTheme } from "./app/styles/theme";
import { View, Text } from "react-native";

export default function App() {
  return (
    <ThemeProvider theme={alphaTheme}>
      <View>
        <Text>Hello from App.tsx component</Text>
      </View>
    </ThemeProvider>
  );
}
