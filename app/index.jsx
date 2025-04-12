import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "../assets/img/logo.jpeg";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={{uri: ''}}/> pour les liens */}
      <Image
        source={Logo}
        style={{
          width: 100,
          height: 100,
          marginVertical: 20,
          borderRadius: 100,
        }}
      />
      <Text style={styles.title}>Bonjour</Text>
      <Text style={{ marginTop: 10, marginBottom: 10 }}>
        Application de List de lecture
      </Text>
      <Link href="/about" style={styles.link}>
        About page
      </Link>
      <Link href="/contact" style={styles.link}>
        Contact page
      </Link>
    </View>
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
