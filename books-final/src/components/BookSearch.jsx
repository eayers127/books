import React, { useState } from 'react';
import Book from './Book';
import { Pagination } from 'react-bootstrap';

const BookSearch = ({ addToReadingList }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [sortOrder, setSortOrder] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${(currentPage - 1) * 5}&maxResults=5${sortOrder}`);
    const data = await response.json();
    setResults(data.items || []);
    setTotalPages(Math.ceil(data.totalItems / 5));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSortChange = (event) => {
    setSortOrder(`&orderBy=${event.target.value}`);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
        <button type="submit">Search</button>
      </form>
      <div>
        <label htmlFor="sort-order">Sort by page count:</label>
        <select id="sort-order" name="sort-order" value={sortOrder} onChange={handleSortChange}>
          <option value="">Select an option</option>
          <option value="printType=books&orderBy=pageCount">Smallest to largest</option>
          <option value="printType=books&orderBy=-pageCount">Largest to smallest</option>
        </select>
      </div>
      {results.length > 0 && (
        <div>
          <div>Page {currentPage} of {totalPages}</div>
          <button onClick={handlePageChange} disabled={currentPage === 1}>Previous</button>
          <button onClick={handlePageChange} disabled={currentPage === totalPages}>Next</button>
          <div className="row">
            {results.map((book) => (
              <div className="col-md-4 mb-3" key={book.id}>
                <Book book={book} addToReadingList={addToReadingList} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookSearch;
