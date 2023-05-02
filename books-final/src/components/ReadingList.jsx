import React, {useState} from 'react';
import BookList from './BookList';

const ReadingList = ({ books, onRemove }) => {
  const [readingList, setReadingList] = useState([]);
  const onAdd = (book) => {
    setReadingList((prevList) => [...prevList, book]);
  };
  return (
    <div>
      <h2>My Reading List</h2>
      {books.length > 0 ? (
        <BookList books={books} onAdd={onAdd} onRemove={onRemove} />
      ) : (
        <p>Your reading list is empty</p>
      )}
    </div>
  );
};

export default ReadingList;
