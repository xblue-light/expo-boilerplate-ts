import { Button, useTheme } from "@rneui/themed";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform } from "react-native";

export const HomeScreen = ({ navigation }: any) => {
  const { theme } = useTheme();
  return (
    <SafeAreaView
      style={{
        padding: theme.spacing.md,
        backgroundColor: theme.colors.grey5,
      }}
    >
      <Button
        onPress={() => navigation.navigate("Details")}
        title="Details"
        color="primary"
      />
      {Platform.OS === "android" && (
        <Button
          onPress={() => navigation.navigate("DrawerLayoutAndroid")}
          title="DrawerLayoutAndroid"
          color="warning"
        />
      )}
    </SafeAreaView>
  );
};
