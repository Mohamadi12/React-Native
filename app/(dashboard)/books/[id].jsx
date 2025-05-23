import { StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'
import { useBooks } from "../../../hooks/useBooks"

// themed components
import ThemedText from '../../../components/ThemedText'
import ThemedView from '../../../components/ThemedView'
import ThemedButton from '../../../components/ThemedButton'
import Spacer from '../../../components/Spacer'
import ThemedCard from '../../../components/ThemedCard'
import { useLocalSearchParams } from 'expo-router'
import ThemedLoader from '../../../components/ThemedLoader'


/*
 safe -> traduit une securisation de l'affichage
*/
const BookDetails = () => {
  const [ book, setBook ] = useState(null)
  const { id } = useLocalSearchParams()
  const { fetchBookById } = useBooks()

  useEffect(() =>{
   async function loadBook (){
    const bookData = await fetchBookById(id)
    setBook(bookData)
   }
   loadBook()
  },[id])

  if(!book) {
    return (
      <ThemedView safe={true} style={styles.container}>
        <ThemedLoader />
      </ThemedView>
    )
  }

  return (
    <ThemedView safe={true} style={styles.container}>
        <ThemedText style={styles.title}>{book.title}</ThemedText>
        <ThemedText>Written by {book.author}</ThemedText>
        <Spacer />

        <ThemedText title={true}>Book description:</ThemedText>
        <Spacer height={10}/>
        <ThemedText>{book.description}</ThemedText>
    </ThemedView>
  )
}

export default BookDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
    },
    title: {
      fontSize: 22,
      marginVertical: 10
    },
    card: {
      margin: 20
    }
})