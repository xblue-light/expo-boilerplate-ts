import React, { useState } from "react";
import { Button, Overlay, Icon } from "@rneui/themed";
import { Text, SafeAreaView } from "react-native";
import { useTheme } from "@rneui/themed";
import { globalStyles } from "../styles/global";

type OverlayComponentProps = {};

//
// TODO:
// 1. Need to make component much more reuseable
// 2. Fix types
//
export const OverlayAlpha: React.FunctionComponent<OverlayComponentProps> = ({
  navigation,
}: any) => {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false);

  const toggleOverlay = (): void => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView
      style={{
        padding: theme.spacing.md,
        backgroundColor: theme.colors.warning,
      }}
    >
      <Button
        title="GO TO DETAILS"
        onPress={() => navigation.navigate("SettingsDetailsScreen")}
      />
      <Button title="Open Overlay" onPress={toggleOverlay} />
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={globalStyles?.overlayStyles}
      >
        <Text style={globalStyles.textPrimary}>Hello!</Text>
        <Text style={globalStyles.textSecondary}>
          Welcome to React Native Elements
        </Text>
        <Button
          color="success"
          icon={
            <Icon
              name="wrench"
              type="font-awesome"
              color="white"
              size={22}
              iconStyle={{ marginRight: 5 }}
            />
          }
          title="Start Building"
          onPress={toggleOverlay}
        />
      </Overlay>
    </SafeAreaView>
  );
};
