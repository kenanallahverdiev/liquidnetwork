import React from "react";
import { Text, TextProps, useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";

export const ThemedText: React.FC<TextProps> = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const color = Colors[colorScheme ?? "light"].text;

  return <Text style={[{ color }, style]} {...props} />;
};
