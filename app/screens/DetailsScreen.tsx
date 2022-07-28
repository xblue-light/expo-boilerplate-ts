import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { ScreenNames } from "../enums/ScreenNames";
import { Button } from "@rneui/themed";

export const DetailsScreen = ({ navigation }: any): JSX.Element => {
  const goHome = (): void => navigation.navigate(ScreenNames.ROOT_HOME_SCREEN);
  return (
    <>
      <View style={globalStyles.container}>
        <View style={globalStyles?.viewStyles}>
          <Text style={{ textAlign: "left" }}>
            This is the home details screen can be reusable component.
          </Text>
          <View style={{ marginVertical: 16 }}>
            <Button type="solid" color="secondary" onPress={goHome}>
              GO BACK HOME
            </Button>
          </View>
        </View>
      </View>
    </>
  );
};
