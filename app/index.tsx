import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export const AUTH_TOKEN = "auth_token";

export default function InitLayout() {
  const [isInitializeDone, setIsInitializeDone] = useState<boolean | null>(
    null
  );
  useEffect(() => {
    const checkIsUserLoggedIn = async () => {
      // Проверяем данные пользователя
      const hasInitializeDone = await AsyncStorage.getItem(AUTH_TOKEN);
      setIsInitializeDone(!!hasInitializeDone);
    };
    checkIsUserLoggedIn();
  }, []);

  if (isInitializeDone === null) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!isInitializeDone) {
    return <Redirect href="/(auth)" />;
  }

  return <Redirect href="/(tabs)" />;
}
