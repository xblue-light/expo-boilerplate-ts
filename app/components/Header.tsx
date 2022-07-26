import * as React from "react";
import { Header, Icon } from "@rneui/base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export const HeaderAlpha = () => {
  return (
    <SafeAreaProvider>
      <Header
        backgroundImageStyle={{}}
        barStyle="default"
        centerComponent={{
          text: "Engage Trustify",
          style: { color: "#fff" },
        }}
        centerContainerStyle={{}}
        containerStyle={globalStyles.headerContainer}
        leftComponent={
          <View style={globalStyles.headerRight}>
            <TouchableOpacity
              onPress={() => console.log("Hello you clicked menu icon")}
            >
              <Icon name="menu" color="white" />
            </TouchableOpacity>
          </View>
        }
        linearGradientProps={{}}
        placement="center"
        rightComponent={{ icon: "home", color: "#fff" }}
        rightContainerStyle={{}}
        statusBarProps={{}}
      />
    </SafeAreaProvider>
  );
};
