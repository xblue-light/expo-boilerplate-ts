import * as React from "react";
import { Header, Icon } from "@rneui/base";
import { View, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export const HeaderAlpha = (): JSX.Element => (
  <Header
    backgroundImageStyle={{}}
    barStyle="default"
    centerComponent={{
      text: "Yellow Notes",
      style: {
        color: "#333",
        paddingTop: 16,
        fontSize: 16,
        fontWeight: "bold",
      },
    }}
    centerContainerStyle={{}}
    containerStyle={globalStyles.headerContainer}
    leftComponent={
      <View style={globalStyles.headerLeftComponent}>
        <TouchableOpacity
          onPress={() => console.log("Hello you clicked menu icon 2")}
        >
          <Icon name="menu" color="white" size={35} />
        </TouchableOpacity>
      </View>
    }
    linearGradientProps={{}}
    placement="center"
    rightComponent={{ icon: "home", color: "#ffffff", size: 35 }}
    rightContainerStyle={{ paddingTop: 8 }}
    statusBarProps={{}}
  />
);
