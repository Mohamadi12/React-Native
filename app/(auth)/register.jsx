import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { Link } from "expo-router";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";
import { useState } from "react";
import ThemedTextInput from "../../components/ThemedTextInput";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Register button pressed", email, password);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ThemedView style={styles.container}>
        <Spacer />

        <ThemedText title={true} style={styles.title}>
          Register for An Account
        </ThemedText>

        <ThemedButton onPress={() => handleSubmit}>
          <Text style={{ color: "#f2f2f2" }}>Register</Text>
        </ThemedButton>

        <ThemedTextInput
          placeholder="Email"
          style={{ width: "80%", marginBottom: 20 }}
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />
        <ThemedTextInput
          placeholder="Password"
          style={{ width: "80%", marginBottom: 20 }}
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />

        <Spacer height={100} />
        <Link href="/login">
          <ThemedText style={{ textAlign: "center" }}>Login instead</ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
});
