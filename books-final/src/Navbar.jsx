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
      </ul>
    </nav>
  );
};

export default Navbar;

