import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../constants/Color";

const About = () => {
  const colorSchema = useColorScheme();
  const theme = Colors[colorSchema] ?? Colors.light;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={styles.title}>About my page</Text>
      <Link href="/" style={styles.link}>
        Go Back Home
      </Link>
    </View>
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
