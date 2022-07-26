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
        onPress={() => navigation.navigate("DetailsScreen")}
        title="Details"
        color="primary"
      />
      <Button
        onPress={() => navigation.navigate("FlatListScreen")}
        title="FlatList"
        color="secondary"
      />
      {Platform.OS === "android" && (
        <Button
          onPress={() => navigation.navigate("DrawerAndroidScreen")}
          title="DrawerAndroidLayout"
          color="warning"
        />
      )}

      <Button
        onPress={() => navigation.navigate("OverlayScreen")}
        title="Overlay"
        color="success"
      />
    </SafeAreaView>
  );
};
