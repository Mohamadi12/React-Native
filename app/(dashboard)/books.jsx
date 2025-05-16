import { FlatList, Pressable, StyleSheet } from "react-native";
import { useBooks } from "../../hooks/useBooks";
import { Colors } from "../../constants/Color";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedCard from "../../components/ThemedCard"
import Spacer from "../../components/Spacer";

const Books = () => {
  const { books } = useBooks()

  return (
    <ThemedView styles={styles.container} safe={true}>
      <Spacer />
      <ThemedText title={true} style={styles.heading}>
        Your Reading List
      </ThemedText>
      <Spacer />
      <FlatList 
         data={books}
         keyExtractor={(item) =>item.$id}
         contentContainerStyle={styles.list}
         renderItem={({item}) =>(
          <Pressable>
            <ThemedCard style={styles.card}>
              <ThemedText style={styles.title}>{item.title}</ThemedText>
              <ThemedText>Written by {item.author}</ThemedText>
              <ThemedText>{item.description}</ThemedText>
            </ThemedCard>
          </Pressable>
         )}
      />
    </ThemedView>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  list:{
    marginTop: 40
  },
  card:{
    width: "90%",
    marginVertical: 10,
    marginHorizontal: "5%",
    padding: 10,
    paddingLeft: 14,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 6
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  }
});
