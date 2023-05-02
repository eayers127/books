import React, { useState } from 'react';
import FindBook from './FindBook';
import Notepad from './components/Notepad';
import TopRatedBooks from './components/TopRatedBooks';
import './App.css'

const App = () => {
  const [page, setPage] = useState('books');

  const renderPage = () => {
    switch (page) {
      case 'books':
        return <FindBook />;
      case 'notepad':
        return <Notepad />;
      case 'top-rated-books':
        return <TopRatedBooks />;
      default:
        return <FindBook />;
    }
  };

  return (
    <div>
      <div className='navWrapper'>
      <nav>
        <ul className='nav'>
          <li onClick={() => setPage('books')}>Find a book</li>
          <li onClick={() => setPage('notepad')}>Take notes</li>
          <li onClick={() => setPage('top-rated-books')}>Top rated books</li>
        </ul>
      </nav>
      </div>
      {renderPage()}
      
    </div>
  );
};

export default App;





