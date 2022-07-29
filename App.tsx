import * as React from "react";
import { ThemeProvider } from "@rneui/themed";
import { alphaTheme } from "./app/styles/theme";
import { Alert, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderAlpha } from "./app/components/Header";
import { Input, Text } from "@rneui/themed";
import { Button } from "@rneui/base";

export default function App() {
  const [todoInputVal, setStateTodoInputVal] = React.useState(null);

  const [todosList, setStateTodosList] = React.useState([
    {
      name: "Lorem ipsum koreal 1",
      id: 0,
    },
    {
      name: "Lorem ipsum koreal 2",
      id: 1,
    },
    {
      name: "Lorem ipsum koreal 3",
      id: 2,
    },
    {
      name: "Lorem ipsum koreal 4",
      id: 3,
    },
  ]);

  const onChangeHandler = (textVal: string): void => {
    setStateTodoInputVal(textVal);
  };

  const onSubmitAddTodo = (): void => {
    if (!todoInputVal) {
      Alert.alert("Please enter input value!");
      return;
    } else {
      // Find if the todo value in current state already exists in the todos array.
      if (todosList.find((el) => el.name === todoInputVal)) {
        Alert.alert("Wops. That one already exists!");
        return;
      }
      console.log("OK. Added new todo!");
      setStateTodosList([
        { name: todoInputVal, id: todosList.length + 1 },
        ...todosList,
      ]);
    }
  };

  const onTouchRemoveFromArray = (id: number): void => {
    setStateTodosList(todosList.filter((el) => el?.id !== id));
    console.log("Deleted todo from list.");
  };

  return (
    <ThemeProvider theme={alphaTheme}>
      <HeaderAlpha />
      <SafeAreaView>
        <Input
          placeholder="eg. John Doe"
          errorStyle={{ color: "coral" }}
          defaultValue="James Packer"
          onChangeText={onChangeHandler}
          style={{ padding: 16, backgroundColor: "white", flex: 1 }}
        />
      </SafeAreaView>

      <SafeAreaView
        style={{
          flexDirection: "column",
          flex: 1,
          alignItems: "flex-start",
        }}
      >
        {todosList &&
          todosList?.map((val) => (
            <TouchableOpacity
              onPress={() => onTouchRemoveFromArray(val.id)}
              key={val.id.toString()}
            >
              <Text
                style={{
                  padding: 16,
                  backgroundColor: "yellow",
                  marginLeft: 16,
                  marginTop: 16,
                  width: 380,
                }}
              >
                * {val.name}
              </Text>
            </TouchableOpacity>
          ))}

        <Button
          onPress={onSubmitAddTodo}
          buttonStyle={{
            padding: 16,
            width: 380,
            marginLeft: 16,
            marginTop: 32,
          }}
        >
          <Text>ADD NOTE</Text>
        </Button>
      </SafeAreaView>
    </ThemeProvider>
  );
}
