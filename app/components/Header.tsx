import * as React from "react";
import { Header, Icon, Text } from "@rneui/base";
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
          style: { color: "#ffffff", paddingTop: 5 },
        }}
        centerContainerStyle={{}}
        containerStyle={globalStyles.headerContainer}
        leftComponent={
          <View style={globalStyles.headerRight}>
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
        rightContainerStyle={{}}
        statusBarProps={{}}
      />
      <View style={globalStyles.viewStyles}>
        <Text>
          Kielbasa tail porchetta beef ball tip. Venison fatback cupim pastrami.
          Cow chicken bresaola pig prosciutto meatloaf capicola corned beef
          strip steak chislic pork jerky sirloin bacon. Pork belly andouille
          salami frankfurter ball tip spare ribs, alcatra turkey tenderloin jowl
          prosciutto ribeye brisket short loin bresaola. Jowl andouille jerky,
          tenderloin venison frankfurter buffalo shank meatloaf chicken
          meatball.
        </Text>
      </View>
    </SafeAreaProvider>
  );
};
