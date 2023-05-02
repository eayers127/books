import React from 'react';
import BookList from './BookList';

const ReadingList = ({ books, onRemove }) => {
  return (
    <div>
      <h2>My Reading List</h2>
      {books.length > 0 ? (
        <BookList books={books} onRemove={onRemove} />
      ) : (
        <p>Your reading list is empty</p>
      )}
    </div>
  );
};

export default ReadingList;
