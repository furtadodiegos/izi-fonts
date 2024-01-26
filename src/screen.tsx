import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";
import type { FC, PropsWithChildren } from "react";

const { styledSafeAreaView } = StyleSheet.create({
  styledSafeAreaView: {
    flex: 1,
  },
});

const AppScreen: FC<PropsWithChildren<SafeAreaViewProps>> = ({
  children,
  ...rest
}) => {
  return (
    <SafeAreaView style={styledSafeAreaView} {...rest}>
      <StatusBar style="auto" />

      {children}
    </SafeAreaView>
  );
};

export default AppScreen;
