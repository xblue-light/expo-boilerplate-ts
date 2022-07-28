import * as React from "react";
import { ThemeProvider } from "@rneui/themed";
import { alphaTheme } from "./app/styles/theme";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <ThemeProvider theme={alphaTheme}>
      <SafeAreaView style={styles.flexContainer}>
        <Text style={styles.textEleOne}>ELE 1</Text>
        <Text style={styles.textEleTwo}>ELE 2</Text>
        <Text style={styles.textEleThr}>ELE 3</Text>
        <Text style={styles.textEleFou}>ELE 4</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1, // Take up available total space so then the children automatically will take up the full height (i.e text components).
    flexDirection: "row", // default is column; column-reverse; row; row-reservse;
    backgroundColor: "forestgreen",
    justifyContent: "space-around", // Defines the space b/e children elements.
    alignItems: "flex-end", // Defines how the inner children elements will be aligned within the flex container.
  },
  textEleOne: {
    backgroundColor: "rebeccapurple",
    padding: 16,
    color: "white",
  },
  textEleTwo: {
    backgroundColor: "coral",
    padding: 16,
    color: "white",
  },
  textEleThr: {
    backgroundColor: "lightblue",
    padding: 16,
    color: "white",
  },
  textEleFou: {
    backgroundColor: "pink",
    padding: 16,
    color: "white",
  },
});
