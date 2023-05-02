import React, { useState } from 'react';
import {Nav} from 'react-bootstrap';

const Navbar = ({ onFindBookClick, onTakeNotesClick }) => {
  const [activeOption, setActiveOption] = useState('findBook');

  const handleOptionClick = (option) => {
    setActiveOption(option);
    if (option === 'findBook') {
      onFindBookClick();
    } else if (option === 'takeNotes') {
      onTakeNotesClick();
    } else if (option === 'topRatedBooks') {
        onTopRatedBooksClick();
      }
  };

  return (
    <nav>
      <ul>
        <li className={activeOption === 'findBook' ? 'active' : ''} onClick={() => handleOptionClick('findBook')}>
          Find a book
        </li>
        <li className={activeOption === 'takeNotes' ? 'active' : ''} onClick={() => handleOptionClick('takeNotes')}>
          Take notes
        </li>
        <li className={activeOption === 'topRatedBooks' ? 'active' : ''} onClick={() => handleOptionClick('topRatedBooks')}>
          Top Rated Books
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

