import { Button, useTheme } from "@rneui/themed";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

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
        onPress={() => navigation.navigate("HomeDetailsScreen")}
        title="HomeDetailsScreen"
        color="primary"
      />
    </SafeAreaView>
  );
};
