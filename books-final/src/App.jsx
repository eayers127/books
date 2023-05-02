import React, { useState } from 'react';
import BookSearch from './components/BookSearch';
import ReadingList from './components/ReadingList';
import RandomBook from './components/RandomBook';
import BookCategory from './components/BookCategory';
import ReadList from './components/ReadList';
import '../src/App.css'

const App = () => {
  const [readingList, setReadingList] = useState([]);
  const [randomBookVisible, setRandomBookVisible] = useState(false);
  const [category, setCategory] = useState('fiction');
  
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAddBook = (book) => {
    setReadingList((prevList) => [...prevList, book]);
  };

  const handleRemoveBook = (book) => {
    setReadingList(prevList => prevList.filter(b => b.id !== book.id));
  };
  

  return (
    <div>
      <h1>Book Search</h1>
      <BookCategory />
      <BookSearch onAdd={handleAddBook} />
      <ReadingList books={readingList} onRemove={handleRemoveBook} />
      <button onClick={() => setRandomBookVisible(true)}>Suggest a Book for Me</button>
      {randomBookVisible && <RandomBook onAdd={handleAddBook} />}
      <ReadList readingList={readingList} setReadingList={setReadingList} />

    </div>
  );
};

export default App;



