import React from "react";
import { Text } from "@rneui/themed";
import { View } from "react-native";

export const SplashScreen = (): JSX.Element => (
  <View
    style={{
      padding: 32,
      backgroundColor: "white",
    }}
  >
    <Text>Loading...</Text>
  </View>
);
