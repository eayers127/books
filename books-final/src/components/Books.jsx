import React, { useState, useEffect } from 'react';
import Book from './Book';

const BookList = ({ books, addToReadingList, markAsRead }) => {
  return (
    <div className="row">
      {books.map((book) => (
        <div className="col-md-4 mb-3" key={book.id}>
          <Book book={book} addToReadingList={addToReadingList} />
          {addToReadingList && (
            <button onClick={() => addToReadingList(book)}>Add to Reading List</button>
          )}
          {markAsRead && (
            <button onClick={() => markAsRead(book)}>Mark as Read</button>
          )}
        </div>
      ))}
    </div>
  );
};

const Books = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [readingList, setReadingList] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${query}&startIndex=${(currentPage - 1) * 5}&maxResults=5`);
      const data = await response.json();
      setBooks(data.items || []);
    };

    fetchBooks();
  }, [query]);

  const addToReadingList = (book) => {
    setReadingList((prev) => [...prev, book]);
  };

  const markAsRead = (book) => {
    const newReadingList = readingList.filter((b) => b.id !== book.id);
    setReadingList(newReadingList);
    setReadBooks((prev) => [...prev, book]);
  };

  return (
    <div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        </form>
      </div>
      <div>
        <h2>Books</h2>
        {books.length > 0 && <BookList books={books} addToReadingList={addToReadingList} />}
        {books.length === 0 && <p>No books found.</p>}
      </div>
      <div>
        <h2>Reading List</h2>
        {readingList.length > 0 && (
          <BookList books={readingList} markAsRead={markAsRead} />
        )}
        {readingList.length === 0 && <p>No books are currently being read.</p>}
      </div>
      <div>
        <h2>Books I Have Read</h2>
        {readBooks.length > 0 && <BookList books={readBooks} />}
        {readBooks.length === 0 && <p>No books have been marked as read yet.</p>}
      </div>
    </div>
  );
};

export default Books;

