import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { SPENDING_GOALS } from "@/data/mockData";

export const SpendingGoals = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <ThemedView style={styles.goalsContainer}>
        <ThemedText style={styles.goalsTitle}>Spending Goals</ThemedText>

        {SPENDING_GOALS.map((goal) => (
          <ThemedView key={goal.id} style={styles.goalItem}>
            <ThemedView style={styles.goalHeader}>
              <ThemedView style={styles.goalIconContainer}>
                <Ionicons
                  name={goal.icon as keyof typeof Ionicons.glyphMap}
                  size={24}
                  color="#4527A0"
                />
              </ThemedView>
              <ThemedView style={styles.goalInfo}>
                <ThemedText style={styles.goalName}>{goal.name}</ThemedText>
                {goal.warning && (
                  <ThemedText style={styles.goalWarning}>
                    {goal.warning}
                  </ThemedText>
                )}
              </ThemedView>
            </ThemedView>
            <ThemedView style={styles.progressBarContainer}>
              <ThemedView
                style={[
                  styles.progressBar,
                  {
                    width: `${goal.progress}%`,
                    backgroundColor: goal.progress > 90 ? "#FF6B6B" : "#4CAF50",
                  },
                ]}
              />
            </ThemedView>
            <ThemedView style={styles.goalAmounts}>
              <ThemedText style={styles.currentAmount}>
                ${goal.currentAmount}
              </ThemedText>
              <ThemedText style={styles.targetAmount}>
                of ${goal.targetAmount}
              </ThemedText>
            </ThemedView>
          </ThemedView>
        ))}
      </ThemedView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#f1f1f1",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "visible",
    height: "35%",
    zIndex: 1000,
  },
  goalsContainer: {
    top: -20,
    backgroundColor: "white",
    borderRadius: 24,
    padding: 20,
    marginHorizontal: 20,
  },
  goalsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  goalItem: {
    marginBottom: 24,
  },
  goalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginBottom: 12,
  },
  goalInfo: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  goalIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(69, 39, 160, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  goalName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  goalWarning: {
    fontSize: 14,
    color: "#FF4444",
    marginTop: 2,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#FF6B6B",
    borderRadius: 4,
  },
  goalAmounts: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  currentAmount: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  targetAmount: {
    fontSize: 16,
    color: "#666",
  },
});
