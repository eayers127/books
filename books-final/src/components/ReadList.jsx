import React, { useState } from 'react';
import Book from './Book';

const ReadList = ({ readingList, setReadingList }) => {
  const [readBooks, setReadBooks] = useState([]);

  const markAsRead = (book) => {
    const newReadingList = readingList.filter((b) => b.id !== book.id);
    setReadingList(newReadingList);
    setReadBooks((prev) => [...prev, book]);
  };

  return (
    <div>
      <h2>Books I Have Read</h2>
      {readBooks.length > 0 && (
        <div className="row">
          {readBooks.map((book) => (
            <div className="col-md-4 mb-3" key={book.id}>
              <Book book={book} />
            </div>
          ))}
        </div>
      )}
      {readBooks.length === 0 && <p>No books have been marked as read yet.</p>}
      <h2>Reading List</h2>
      {readingList.length > 0 && (
        <div className="row">
          {readingList.map((book) => (
            <div className="col-md-4 mb-3" key={book.id}>
              <Book book={book} />
              <button onClick={() => markAsRead(book)}>Mark as Read</button>
            </div>
          ))}
        </div>
      )}
      {readingList.length === 0 && <p>No books are currently being read.</p>}
    </div>
  );
};

export default ReadList;
