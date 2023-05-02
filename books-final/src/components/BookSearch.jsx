import React, { useState } from 'react';
import axios from 'axios';
import BookList from './BookList';
import BookCategory from './BookCategory';
import { Row, Col, Form, Button } from 'react-bootstrap';

const BookSearch = ({ addToReadingList }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 5;

  const handleSubmit = (event) => {
    event.preventDefault();
    searchBooks(searchTerm);
  };

  const handleNextPage = () => {
    setStartIndex(startIndex + itemsPerPage);
  };

  const handlePrevPage = () => {
    setStartIndex(startIndex - itemsPerPage);
  };
  const handleSortChange = (event) => {
    setSortOrder(`&orderBy=${event.target.value}`);
  };

  const searchBooks = (term) => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=40&subject=${BookCategory}`)
      .then((response) => {
        setBooks(response.data.items);
        setTotalItems(response.data.totalItems);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row className='mb-4'>
          <Col sm='10'>
            <Form.Control
              type='text'
              placeholder='Enter a book title or author'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col>
            <Button type='submit'>Search</Button>
          </Col>
        </Row>      
      </Form>
      {totalItems > 0 ? (
        <div>
          <Row>
            <Col>
              <p>
                Showing {startIndex + 1} -{' '}
                {Math.min(startIndex + itemsPerPage, totalItems)} of {totalItems} results.
              </p>
            </Col>
            <Col className='text-end'>
              {startIndex > 0 && (
                <Button variant='link' onClick={handlePrevPage}>
                  Previous
                </Button>
              )}
              {startIndex + itemsPerPage < totalItems && (
                <Button variant='link' onClick={handleNextPage}>
                  Next
                </Button>
              )}
            </Col>
          </Row>
          <BookList
            books={books.slice(startIndex, startIndex + itemsPerPage)}
            addToReadingList={addToReadingList}
          />
          <Row>
            <Col>
              <p>
                Showing {startIndex + 1} -{' '}
                {Math.min(startIndex + itemsPerPage, totalItems)} of {totalItems} results.
              </p>
            </Col>
            <Col className='text-end'>
              {startIndex > 0 && (
                <Button variant='link' onClick={handlePrevPage}>
                  Previous
                </Button>
              )}
              {startIndex + itemsPerPage < totalItems && (
                <Button variant='link' onClick={handleNextPage}>
                  Next
                </Button>
              )}
            </Col>
          </Row>
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default BookSearch;
