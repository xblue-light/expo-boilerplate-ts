import React, { useState, useContext } from "react";
import { View, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import { AuthContext } from "../context/AuthContext";

export const SignInScreen = (): JSX.Element => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  return (
    <View
      style={{
        padding: 16,
        margin: 8,
      }}
    >
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{
          backgroundColor: "white",
          padding: 16,
          marginBottom: 8,
        }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          backgroundColor: "white",
          padding: 16,
          marginBottom: 45,
        }}
      />
      <Button
        title="Sign in"
        onPress={() => signIn({ username, password } as any)}
      />
    </View>
  );
};
