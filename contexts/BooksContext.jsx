import { createContext, useState } from "react";
import { databases } from "../lib/appwrite";

const DATABASE_ID = "681e26f9001ee94c2ea4"
const COLLECTION_ID = "681e2706003d79de573a"

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  // fetch all books
  async function fetchBooks() {
    try {
    } catch (error) {
      console.log(message.error);
    }
  }

  // fetch book by id
  async function fetchBookById(id) {
    try {
    } catch (error) {
      console.log(message.error);
    }
  }

  // create book
  async function createBook(data) {
    try {
    } catch (error) {
      console.log(message.error);
    }
  }

  // delete book
  async function deleteBook(id) {
    try {
    } catch (error) {
      console.log(message.error);
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
