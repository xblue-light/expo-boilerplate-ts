import React, { useState, useContext } from "react";
import { View, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import { AuthContext } from "../context/AuthContext";

export const SignInScreen = (): JSX.Element => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => signIn({ username, password })} />
    </View>
  );
};
