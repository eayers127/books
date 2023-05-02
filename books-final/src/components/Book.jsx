import React from 'react';

const Book = ({ book, onAdd, onRemove }) => {
  const { volumeInfo } = book;

  const handleAdd = () => {
    onAdd(book);
  };

  const handleRemove = () => {
    onRemove(book);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{volumeInfo.title}</h5>
        <p className="card-text">{volumeInfo.authors}</p>
        <img src={volumeInfo.imageLinks.thumbnail} alt={volumeInfo.title} />
        <div className="button-container">
          
            <button className="btn btn-primary" onClick={handleAdd}>
              Add to Reading List
            </button>
          
          {onRemove && (
            <button className="btn btn-secondary" onClick={handleRemove}>
              Remove from Reading List
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;

