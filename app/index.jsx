import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "../assets/img/logo.jpeg";

const Home = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={{uri: ''}}/> */}
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

      <View style={styles.card}>
        <Text>Hello, this is a card</Text>
        {/* Ce style remplace le style existant */}
        <Text style={[styles.title, { color: "purple" }]}>
          It is mon container
        </Text>
      </View>
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
});
