import { Text } from "@rneui/themed";
import React from "react";
import { View } from "react-native";

export const ProfileScreen = ({ navigation }: any): JSX.Element => {
  return (
    <View
      style={{
        backgroundColor: "#333",
        padding: 32,
      }}
    >
      <Text>Welcome this is the profile screen!</Text>
    </View>
  );
};
