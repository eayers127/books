import React from 'react';

const SortBy = ({ sortBy, onChange }) => {
  return (
    <div>
      <label htmlFor="sort-by-select">Sort By:</label>
      <select id="sort-by-select" value={sortBy} onChange={onChange}>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="pageCount">Page Count</option>
      </select>
    </div>
  );
};

export default SortBy;
