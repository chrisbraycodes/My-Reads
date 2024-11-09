import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI"; // Import API functions
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";
import './App.css';

function App() {
  const [books, setBooks] = useState([]); // State to store fetched books

  // Fetch books when the component mounts
  useEffect(() => {
    const fetchBooks = async () => {
      const fetchedBooks = await BooksAPI.getAll(); // Fetch books from the API
      setBooks(fetchedBooks); // Store them in state
    };

    fetchBooks(); // Call the function to fetch books
  }, []); // Empty dependency array to call this only on mount

  // Handle updating a book's shelf
  const updateBookShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      // Update the book's shelf locally after API call succeeds
      setBooks((prevBooks) =>
        prevBooks.map((b) =>
          b.id === book.id ? { ...b, shelf: newShelf } : b
        )
      );
    });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainPage books={books} updateBookShelf={updateBookShelf} />}
        />
        <Route
          path="/search"
          element={
            <SearchPage updateBookShelf={updateBookShelf} currentBooks={books} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
