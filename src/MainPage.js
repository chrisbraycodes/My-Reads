import React from 'react';
import Bookshelf from './Bookshelf'; // Reusable bookshelf component

function MainPage({ books, updateBookShelf }) {
    const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
    const wantToRead = books.filter((book) => book.shelf === 'wantToRead');
    const read = books.filter((book) => book.shelf === 'read');
  
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Bookshelf
            title="Currently Reading"
            books={currentlyReading}
            updateBookShelf={updateBookShelf}
          />
          <Bookshelf
            title="Want to Read"
            books={wantToRead}
            updateBookShelf={updateBookShelf}
          />
          <Bookshelf
            title="Read"
            books={read}
            updateBookShelf={updateBookShelf}
          />
        </div>
        <div className="open-search">
          <a href="/search">Add a book</a>
        </div>
      </div>
    );
  }
  
  export default MainPage;
