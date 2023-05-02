import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './BookList';

const RandomBook = ({ onAdd }) => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const getRandomBook = async () => {
      const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=1');
      setBook(response.data.items[0]);
    };
    getRandomBook();
  }, []);

  const handleAdd = () => {
    onAdd({
      id: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors[0],
      cover: book.volumeInfo.imageLinks.thumbnail
    });
  };

  return (
    <div>
      {book && (
        <div>
          <h2>{book.volumeInfo.title}</h2>
          <p>by {book.volumeInfo.authors[0]}</p>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
          <button onClick={handleAdd}>Add to Reading List</button>
          <button onClick={() => props.addToReadingList(props.book)}>Add to Reading List</button>
        </div>
      )}
    </div>
  );
};

export default RandomBook;
