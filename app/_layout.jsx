import { useColorScheme } from "react-native";
import { Stack } from "expo-router";
import { Colors } from "../constants/Color";
import { StatusBar } from "expo-status-bar";
import { UserProvider } from "../contexts/UserContext";
import { BooksProvider } from "../contexts/BooksContext";

const RootLayout = () => {
  const colorSchema = useColorScheme();
  const theme = Colors[colorSchema] ?? Colors.light;

  return (
    <UserProvider>
      <BooksProvider>
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
      </BooksProvider>
    </UserProvider>
  );
};

export default RootLayout;
