import React, { useState, useEffect } from 'react';

const TopRatedBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=subject:fiction&orderBy=ratings&maxResults=10');
      const data = await response.json();
      setBooks(data.items || []);
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Top Rated Books</h2>
      {books.length > 0 && (
        <div className="row">
          {books.map((book) => (
            <div className="col-md-4 mb-3" key={book.id}>
              <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
              <h4>{book.volumeInfo.title}</h4>
              <p>By: {book.volumeInfo.authors.join(', ')}</p>
            </div>
          ))}
        </div>
      )}
      {books.length === 0 && <p>No books found.</p>}
    </div>
  );
};

export default TopRatedBooks;
