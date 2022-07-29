import React, { useContext } from "react";
import { Text } from "@rneui/themed";
import { View, Pressable } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { Button } from "@rneui/themed";

export const ProtectedScreen = (): JSX.Element => {
  const { signOut } = useContext(AuthContext);
  return (
    <View
      style={{
        backgroundColor: "#cece",
        padding: 32,
      }}
    >
      <Text style={{ paddingBottom: 16 }}>Signed in!</Text>
      <Button
        onPress={signOut}
        titleStyle={{ color: "white" }}
        title="Sign Out"
      />
    </View>
  );
};
