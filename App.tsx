import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeProvider } from "@rneui/themed";
import { alphaTheme } from "./app/styles/theme";
import { HomeScreen } from "./app/screens/HomeScreen";
import { DetailsScreen } from "./app/screens/DetailsScreen";
import { OverlayScreen } from "./app/screens/OverlayScreen";
import { ScreenNames } from "./app/enums/ScreenNames";
import { HeaderAlpha } from "./app/components/Header";

// BEGINS HOME STACK WITH MULTUPLE SCREENS
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={ScreenNames.ROOT_HOME_SCREEN}
        component={HomeScreen}
      />
      <HomeStack.Screen
        name={ScreenNames.HOME_DETAILS_SCREEN}
        component={DetailsScreen}
      />
    </HomeStack.Navigator>
  );
}

// BEGINS SETTINGS STACK WITH MULTIPLE SCREENS
const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name={ScreenNames.SETTINGS_OVERLAY_SCREEN}
        component={OverlayScreen}
      />
    </SettingsStack.Navigator>
  );
}

// CREATE TAB NAVIGATOR WHICH WILL WRAP AROUND MULTIPLE TAB SCREENS
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider theme={alphaTheme}>
      <NavigationContainer>
        <HeaderAlpha />
        <Tab.Navigator initialRouteName={ScreenNames.ROOT_HOME_SCREEN}>
          <Tab.Screen name="HOME_TAB" component={HomeStackScreen} />
          <Tab.Screen name="SETTINGS_TAB" component={SettingsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
