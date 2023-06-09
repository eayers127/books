import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './BookList';
import ReadingList from './ReadingList';

const RandomBook = () => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const getRandomBook = async () => {
      const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=5');
      setBook(response.data.items[0]);
    };
    getRandomBook();
  }, []);

  const onAdd = () => {
    ReadingList.push()
  };

  return (
    <div>
      {book && (
        <div>
          <h2>{book.volumeInfo.title}</h2>
          <p>by {book.volumeInfo.authors[0]}</p>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
          <button onClick={onAdd}>Add to Reading List</button>
        </div>
      )}
    </div>
  );
};

export default RandomBook;
