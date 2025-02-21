import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function PaymentScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
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
