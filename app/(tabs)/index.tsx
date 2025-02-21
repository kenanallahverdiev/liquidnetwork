import { StyleSheet, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ThemedView } from "@/components/ThemedView";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { AUTH_TOKEN } from "@/app/index";
import { Header } from "@/components/Header";
import { FundsCard } from "@/components/FundsCard";
import { ExpensesCircle } from "@/components/ExpensesCircle";
import { SpendingGoals } from "@/components/SpendingGoals";
import { SettingsModal } from "@/components/SettingsModal";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem(AUTH_TOKEN);
      router.replace("/(auth)");
    } catch (error) {
      Alert.alert("Ошибка", "Не удалось выйти из системы");
    }
  };

  return (
    <ThemedView style={styles.container}>
      <LinearGradient colors={["#4527A0", "#2196F3"]} style={styles.gradient}>
        <Header
          insets={insets}
          onSettingsPress={() => setIsSettingsVisible(true)}
        />
        <FundsCard />
        <ExpensesCircle />
      </LinearGradient>

      <SpendingGoals />

      <SettingsModal
        visible={isSettingsVisible}
        onClose={() => setIsSettingsVisible(false)}
        onLogout={handleLogout}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
