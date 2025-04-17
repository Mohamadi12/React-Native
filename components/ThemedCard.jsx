import { StyleSheet, useColorScheme, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Color";

const ThemedCard = ({ style, ...props }) => {
  const colorSchema = useColorScheme();
  const theme = Colors[colorSchema] ?? Colors.light;
  return (
    <View
      style={[{ backgroundColor: theme.uiBackground }, styles.card, style]}
      {...props}
    />
  );
};

export default ThemedCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
  },
});
