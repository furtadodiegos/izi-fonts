import React from "react";

import type { FC } from "react";
import AppScreen from "./screen";
import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppText from "./text";

const AppProviders: FC = () => {
  return (
    <SafeAreaProvider>
      <AppScreen edges={["top"]}>
        <Text
          style={{
            fontFamily: `MoiraiOne-Regular`,
            fontSize: 30,
            fontWeight: "900",
          }}
        >
          Morai One
        </Text>

        <AppText fontFamily="MoiraiOne-Regular" variant="xl">
          Morai One
        </AppText>

        <View style={{ marginVertical: 12 }} />

        <Text
          style={{
            fontFamily: `NotoSerifMakasar-Regular`,
            fontSize: 30,
          }}
        >
          Noto One
        </Text>

        <AppText variant="xl" fontWeight="bold">
          Noto One
        </AppText>
      </AppScreen>
    </SafeAreaProvider>
  );
};

export default AppProviders;
