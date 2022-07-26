import { HeaderAlpha } from "../components/index";
import React from "react";
import { View, Text } from "react-native";
import { useTheme, Button } from "@rneui/themed";
import { globalStyles } from "../styles/global";

export const DetailsScreen = () => {
  const { theme } = useTheme();
  return (
    <>
      <HeaderAlpha />
      <View style={globalStyles?.viewStyles}>
        <Text>This is the details screen can be reusable component.</Text>
        <Button title="WELCOME DETAILS"></Button>
      </View>
    </>
  );
};
