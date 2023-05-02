import React from 'react';
import Book from './Book';

const BookList = ({ books, onAdd, onRemove }) => {
    if (!books) {
      return null;
    }
  
    return (
      <div>
        {books.length > 0 ? (
          books.map((book) => (
            <Book key={book.id} book={book} onAdd={onAdd} onRemove={onRemove} />
          ))
        ) : (
          <p>No books to display</p>
        )}
      </div>
    );
  };
  

export default BookList
