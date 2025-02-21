import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import LogoTabBarIcon from "@/assets/icons/LogoTabBarIcon";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarItemStyle: {
          paddingTop: 5,
        },
        tabBarStyle: Platform.select({
          ios: {
            paddingHorizontal: 20,
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="goals"
        options={{
          title: "Goals",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="target" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="liquid"
        options={{
          title: "Liquid",
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            backgroundColor: "#f1f1f1",
            borderColor: "blue",
            borderWidth: 1,
            top: -10,
            left: 25,
          },
          tabBarIcon: ({ color }) => <LogoTabBarIcon size={46} />,
        }}
      />
      <Tabs.Screen
        name="payment"
        options={{
          title: "Payment",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="creditcard.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="heart.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
