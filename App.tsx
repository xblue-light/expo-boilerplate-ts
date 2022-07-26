import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeProvider } from "@rneui/themed";
import { alphaTheme } from "./app/styles/theme";
import { HomeScreen } from "./app/screens/HomeScreen";
import { DetailsScreen } from "./app/screens/DetailsScreen";
import { OverlayAlpha } from "./app/components";

// BEGINS HOME STACK WITH MULTUPLE SCREENS
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeRootScreen" component={HomeScreen} />
      <HomeStack.Screen name="HomeDetailsScreen" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

// BEGINS SETTINGS STACK WITH MULTIPLE SCREENS
const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsOverlayScreen"
        component={OverlayAlpha}
      />
      <SettingsStack.Screen
        name="SettingsDetailsScreen"
        component={DetailsScreen}
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
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Settings" component={SettingsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
