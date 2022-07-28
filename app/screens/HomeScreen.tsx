import { Button, useTheme } from "@rneui/themed";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenNames } from "../enums/ScreenNames";

export const HomeScreen = ({ navigation }: any) => {
  const { theme } = useTheme();
  return (
    <SafeAreaView
      style={{
        padding: theme.spacing.md,
        backgroundColor: "rebeccapurple",
      }}
    >
      <Button
        onPress={() => navigation.navigate(ScreenNames.HOME_DETAILS_SCREEN)}
        title={ScreenNames.HOME_DETAILS_SCREEN}
        color="primary"
      />
    </SafeAreaView>
  );
};
