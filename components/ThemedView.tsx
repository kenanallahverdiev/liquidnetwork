import React from "react";
import { View, ViewProps, useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";

export const ThemedView: React.FC<ViewProps> = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const backgroundColor = Colors[colorScheme ?? "light"].background;

  return <View style={[{ backgroundColor }, style]} {...props} />;
};
