import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      {/* <Image source={{uri: ''}}/> pour les liens */}
      <ThemedLogo
        style={{
          width: 100,
          height: 100,
          marginVertical: 20,
          borderRadius: 100,
        }}
      />
      <Spacer height={20} />

      <ThemedText style={styles.title}>Bonjour</ThemedText>

      <Spacer height={10} />
      <ThemedText> Application de List de lecture </ThemedText>
      <Spacer />

      <Link href="/login" style={styles.link}>
        <ThemedText>Login page</ThemedText>
      </Link>
      <Link href="/register" style={styles.link}>
        <ThemedText>Register page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    shadowColor: "#000",
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
