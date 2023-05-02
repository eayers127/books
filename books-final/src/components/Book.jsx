import React from 'react';

const Book = ({ book, onAdd, onRemove }) => {
  const handleAddClick = () => {
    onAdd(book);
  };

  const handleRemoveClick = () => {
    onRemove(book.id);
  };

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{book.volumeInfo.title}</h5>
            <p className="card-text">{book.volumeInfo.authors.join(', ')}</p>
            <p className="card-text">
              <small className="text-muted">{book.volumeInfo.publishedDate}</small>
            </p>
            {onAdd && (
              <button className="btn btn-primary mr-2" onClick={handleAddClick}>
                Add to Reading List
              </button>
            )}
            {onRemove && (
              <button className="btn btn-danger" onClick={handleRemoveClick}>
                Remove from Reading List
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
