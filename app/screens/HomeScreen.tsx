import { Button, useTheme } from "@rneui/themed";
import React from "react";

import { View } from "react-native";

export const HomeScreen = ({ navigation }: any) => {
  const { theme } = useTheme();
  return (
    <View
      style={{
        padding: theme.spacing.md,
        backgroundColor: "rebeccapurple",
      }}
    ></View>
  );
};
