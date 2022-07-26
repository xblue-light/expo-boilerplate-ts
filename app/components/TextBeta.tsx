import React from "react";
import { useTheme } from "@rneui/themed";
import { Text } from "react-native";

export const TextBeta = () => {
  const { theme } = useTheme();
  return (
    <Text style={{ color: theme.colors.primary }}>
      Text component using use theme hook.
    </Text>
  );
};
