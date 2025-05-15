import { createContext, useState } from "react";
import { databases } from "../lib/appwrite";
import { ID, Permission, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

const DATABASE_ID = "681e26f9001ee94c2ea4"
const COLLECTION_ID = "681e2706003d79de573a"

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const { user } = useUser()

  // fetch all books
  async function fetchBooks() {
    try {
    } catch (error) {
      console.log(error.message);
    }
  }

  // fetch book by id
  async function fetchBookById(id) {
    try {
    } catch (error) {
      console.log(error.message);
    }
  }

  // create book
  async function createBook(data) {
    try {
      const newBook = await databases.createDocument(
        DATABASE_ID, 
        COLLECTION_ID,
        ID.unique(), // generate a unique ID for the book 
        {
          ...data,  // spread the data object to create a new book 
          userId: user.$id // add the user ID to the book 
        },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id))
        ]
      )
    } catch (error) {
      console.log(error.message);
    }
  }

  // delete book
  async function deleteBook(id) {
    try {
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}
