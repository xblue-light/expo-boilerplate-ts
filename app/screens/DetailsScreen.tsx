import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import { ScreenNames } from "../enums/ScreenNames";

export const DetailsScreen = ({ navigation }: any): JSX.Element => {
  const goBackHome = (): void =>
    navigation.navigate(ScreenNames.ROOT_HOME_SCREEN);
  return (
    <>
      <View style={globalStyles.container}>
        <View style={globalStyles?.viewStyles}>
          <Text style={{ textAlign: "left" }}>
            This is the home details screen can be reusable component.
          </Text>
          <TouchableOpacity onPress={goBackHome}>
            <Text style={{ textAlign: "left" }}>GO HOMEe</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
