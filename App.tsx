import React from "react";
import { ThemeProvider } from "@rneui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { alphaTheme } from "./app/styles/theme";
import { DrawerLayoutAndroidAlpha } from "./app/components/DrawerLayoutAndroid";
import { OverlayComponent } from "./app/components/index";
import { FlatListAlpha } from "./app/components/FlatList";
import { ScreenTypes } from "./app/types/ScreenTypes";
import { HomeScreen } from "./app/screens/homeScreen";
import { DetailsScreen } from "./app/screens/detailsScreen";

const Stack = createNativeStackNavigator();

const componentScreens: Array<ScreenTypes> = [
  {
    name: "HomeScreen",
    component: HomeScreen,
  },
  {
    name: "DetailsScreen",
    component: DetailsScreen,
  },
  {
    name: "FlatListScreen",
    component: FlatListAlpha,
  },
  {
    name: "DrawerAndroidScreen",
    component: DrawerLayoutAndroidAlpha,
  },
  {
    name: "OverlayScreen",
    component: OverlayComponent,
  },
];

export default () => {
  return (
    <>
      <ThemeProvider theme={alphaTheme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            {componentScreens.map((item, index) => (
              <Stack.Screen
                key={index}
                name={item.name}
                component={item.component}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};
