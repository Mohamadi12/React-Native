import { StyleSheet, useColorScheme } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "../constants/Color";
import { StatusBar } from "expo-status-bar";
import { UserProvider } from "../contexts/UserContext";

const RootLayout = () => {
  const colorSchema = useColorScheme();
  const theme = Colors[colorSchema] ?? Colors.light;

  return (
    <UserProvider>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}
      >
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ title: "Home" }} />
      </Stack>
    </UserProvider>
  );
};

export default RootLayout;