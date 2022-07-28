import * as React from "react";
import { ThemeProvider } from "@rneui/themed";
import { alphaTheme } from "./app/styles/theme";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <ThemeProvider theme={alphaTheme}>
      <SafeAreaView
        style={{
          backgroundColor: "#cece",
          flexDirection: "row",
          flex: 1, // Take up available total space so then the children automatically will take up the full height (i.e text components)
        }}
      >
        <Text style={styles.textEleOne}>ELE 1</Text>
        <Text style={styles.textEleTwo}>ELE 2</Text>
        <Text style={styles.textEleThr}>ELE 3</Text>
        <Text style={styles.textEleFou}>ELE 4</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ccc",
  },
  textEleOne: {
    backgroundColor: "rebeccapurple",
    padding: 10,
    color: "white",
    textAlign: "left",
  },
  textEleTwo: {
    backgroundColor: "coral",
    padding: 10,
    color: "white",
    textAlign: "left",
  },
  textEleThr: {
    backgroundColor: "lightblue",
    padding: 10,
    color: "white",
    textAlign: "left",
  },
  textEleFou: {
    backgroundColor: "pink",
    padding: 10,
    color: "white",
    textAlign: "left",
  },
});
