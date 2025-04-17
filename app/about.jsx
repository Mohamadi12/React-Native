import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../constants/Color";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const About = () => {
  const colorSchema = useColorScheme();
  const theme = Colors[colorSchema] ?? Colors.light;

  return (
    <ThemedView style={[styles.container, { backgroundColor: theme.background }]}>
      <ThemedText style={styles.title}>About my page</ThemedText>
      <Link href="/" style={styles.link}>
        <ThemedText>Go Back Home</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
