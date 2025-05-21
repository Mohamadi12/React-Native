import { StyleSheet } from 'react-native'

// themed components
import ThemedText from '../../../components/ThemedText'
import ThemedView from '../../../components/ThemedView'
import ThemedButton from '../../../components/ThemedCard'
import Spacer from '../../../components/Spacer'
import ThemedCard from '../../../components/ThemedCard'
import { useLocalSearchParams } from 'expo-router'


/*
 safe -> traduit une securisation de l'affichage
*/
const BookDetails = () => {
  const { id } = useLocalSearchParams()

  return (
    <ThemedView safe={true} style={styles.container}>
        <ThemedText>Book Details - {id}</ThemedText>
    </ThemedView>
  )
}

export default BookDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
    }
})