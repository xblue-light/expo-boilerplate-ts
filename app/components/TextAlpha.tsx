import React from "react";
import { Text } from "react-native";
import { ThemeConsumer } from "@rneui/themed";

// Note: Keep in mind that this component should be rendered inside a theme provider otherwise this component will not work as expected.
export const TextAlpha = () => (
  <ThemeConsumer>
    {({ theme }) => (
      <Text style={{ color: theme.colors.grey1 }}>
        Text component using theme consumer!
      </Text>
    )}
  </ThemeConsumer>
);
