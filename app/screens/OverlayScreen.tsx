import React, { useState } from "react";
import { Button, Overlay, Icon } from "@rneui/themed";
import { Text, SafeAreaView } from "react-native";
import { useTheme } from "@rneui/themed";
import { globalStyles } from "../styles/global";

type OverlayComponentProps = {};

export const OverlayScreen: React.FunctionComponent<OverlayComponentProps> = ({
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
        backgroundColor: "yellow",
      }}
    >
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
