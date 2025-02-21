import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { EdgeInsets } from "react-native-safe-area-context";
import { USER_DATA } from "@/data/mockData";

interface HeaderProps {
  onSettingsPress: () => void;
  insets: EdgeInsets;
}

export const Header: React.FC<HeaderProps> = ({ onSettingsPress, insets }) => {
  return (
    <ThemedView style={[styles.header, { marginTop: insets.top }]}>
      <ThemedView style={styles.profileSection}>
        <Image source={USER_DATA.avatar} style={styles.avatar} />
        <ThemedView style={styles.profileInfo}>
          <ThemedText style={styles.greeting}>
            Hello, {USER_DATA.name}!
          </ThemedText>
          <ThemedText style={styles.subGreeting}>
            Welcome to your financial insight.
          </ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.settingsButton}>
        <TouchableOpacity onPress={onSettingsPress}>
          <Ionicons name="settings-outline" size={24} color="white" />
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  profileSection: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  profileInfo: {
    backgroundColor: "transparent",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  subGreeting: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
  },
});
