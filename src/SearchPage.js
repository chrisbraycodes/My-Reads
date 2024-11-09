import React, { useState } from 'react';
import * as BooksAPI from './BooksAPI';

function SearchPage({ updateBookShelf, currentBooks }) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      BooksAPI.search(value).then((results) => {
        if (results && !results.error) {
          const updatedResults = results.map((book) => {
            const match = currentBooks.find((b) => b.id === book.id);
            return match ? { ...book, shelf: match.shelf } : book;
          });
          setSearchResults(updatedResults);
        } else {
          setSearchResults([]);
        }
      });
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a href="/" className="close-search">Close</a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults.map((book) => (
            <li key={book.id}>
              <div className="book">
                <div
                  className="book-cover"
                  style={{
                    backgroundImage: `url(${book.imageLinks?.thumbnail || ''})`,
                  }}
                ></div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors?.join(', ')}</div>
                <div className="book-shelf-changer">
                  <select
                    value={book.shelf || 'none'}
                    onChange={(e) => updateBookShelf(book, e.target.value)}
                  >
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default SearchPage;
