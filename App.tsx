import React, { useEffect, useReducer, useMemo } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignInScreen } from "./app/screens/SignInScreen";
import { AuthContext } from "./app/context/AuthContext";
import authReducer from "./app/reducers/authReducer";
import { ProtectedScreen } from "./app/screens/ProtectedScreen";
import { loginWithMockUserCreds } from "./app/axios/axiosInstance";
import * as SecureStore from "expo-secure-store";

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  const [state, dispatch] = useReducer(authReducer, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });

  useEffect(() => {
    // Read the secure store.
    SecureStore.getItemAsync("userToken").then((store) => {
      dispatch({ type: "RESTORE_TOKEN", token: store });
      console.log(store);
    });

    console.log(JSON.stringify(state, null, 4));

    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
        // TODO ... Add error handler
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      //dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data: any) => {
        console.log("DISPATCH: SIGN_IN");

        // Read the secure store.
        SecureStore.getItemAsync("userToken").then((store) =>
          console.log(store)
        );

        // Login and get access token
        const response = await loginWithMockUserCreds();

        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token
        dispatch({ type: "SIGN_IN", token: response?.accessToken });

        // Set the new access token
        SecureStore.setItemAsync("userToken", response?.accessToken);

        // Read the secure store.
        SecureStore.getItemAsync("userToken").then((store) =>
          console.log(store)
        );
      },
      signOut: async () => {
        // TODO:
        console.log("DISPATCH: SIGN_OUT");
        dispatch({ type: "SIGN_OUT", token: "" });

        // Clear the secure storage on logout
        SecureStore.deleteItemAsync("userToken");
      },
      signUp: async (data: any) => {
        // TODO:
        console.log("DISPATCH: SIGN_IN");

        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{
                title: "Sign in",
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? "pop" : "push",
              }}
            />
          ) : (
            // User is signed in
            <Stack.Screen name="Home" component={ProtectedScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
