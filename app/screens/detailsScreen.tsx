import { HeaderAlpha } from "../components/index";
import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "@rneui/themed";
import { globalStyles } from "../styles/global";

export const DetailsScreen = () => {
  const { theme } = useTheme();
  return (
    <>
      <HeaderAlpha />
      <View style={globalStyles?.viewStyles}>
        <Text>WELCOME TO THE DETAILS.</Text>
      </View>
    </>
  );
};
