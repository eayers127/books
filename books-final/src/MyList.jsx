import React, { useContext } from 'react';
import Book from './components/Book';
import BookList from './components/BookList';
import ReadList from './components/ReadList';

const MyList = () => {
    const [readingList, setReadingList] = useState([]);

  return (
    <div>
      <h2>My List</h2>
      {readingList.length > 0 && (
        <div className="row">
          {readingList.map((book) => (
            <div className="col-md-4 mb-3" key={book.id}>
              <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
              <h4>{book.volumeInfo.title}</h4>
              <p>By: {book.volumeInfo.authors.join(', ')}</p>
            </div>
          ))}
        </div>
      )}
      {readingList.length === 0 && <p>No books found in your list.</p>}
      <ReadList readingList={readingList} setReadingList={setReadingList} />
        <BookList />
    </div>
  );
};

export default MyList;
