import React from "react";
import { StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { USER_DATA } from "@/data/mockData";

export const FundsCard = () => {
  return (
    <ThemedView style={styles.fundsCard}>
      <ThemedText style={styles.fundsLabel}>Available Funds</ThemedText>
      <ThemedView style={styles.monthSelector}>
        <ThemedText style={styles.fundsAmount}>
          ${USER_DATA.availableFunds.toLocaleString()}
        </ThemedText>
      </ThemedView>
      <ThemedView
        style={{
          position: "absolute",
          backgroundColor: "transparent",
          right: 10,
          top: 10,
        }}
      >
        <ThemedView style={styles.monthDropdown}>
          <ThemedText style={styles.monthText}>Month</ThemedText>
          <Ionicons name="chevron-down" size={20} color="white" />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  fundsCard: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 16,
    padding: 20,
    marginTop: 24,
    marginHorizontal: 20,
  },
  monthSelector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    marginTop: 4,
  },
  monthDropdown: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "transparent",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  monthText: {
    color: "white",
    fontSize: 14,
  },
  fundsLabel: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
  },
  fundsAmount: {
    paddingTop: 10,
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
});
