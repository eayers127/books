import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/find-a-book">Books</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/find-a-book">Find a Book</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/notes">Take Notes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/top-rated-books">Top Rated Books</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

