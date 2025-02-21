import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function GoalsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Goals</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
