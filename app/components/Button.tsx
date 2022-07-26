import React from "react";
import { Button, ButtonProps } from "@rneui/themed";
import { StyleProp, ViewStyle } from "react-native";

const RaisedButton = (
  props: JSX.IntrinsicAttributes & ButtonProps & { children?: React.ReactNode }
) => <Button raised {...props} />;

interface Props {
  title?: string;
  onPress?: () => void;
  overrideStyles?: StyleProp<ViewStyle>;
}
// Your App
export const AlphaButton = (props: Props): JSX.Element => {
  return (
    <RaisedButton
      title={props?.title}
      onPress={props?.onPress}
      buttonStyle={props?.overrideStyles}
    />
  );
};
