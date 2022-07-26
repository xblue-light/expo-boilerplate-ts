import React from "react";
import { Text } from "react-native";
import { ThemeConsumer } from "@rneui/themed";

export const TextAlpha = () => (
  <ThemeConsumer>
    {({ theme }) => (
      <Text style={{ color: theme.colors.grey1 }}>TEXTALPHA COMPONENT!</Text>
    )}
  </ThemeConsumer>
);
