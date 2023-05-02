import React, { useState } from 'react';
import Navbar from './Navbar';
import FindBook from './FindBook';
import Notepad from './components/Notepad';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('findBook');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Navbar onSelect={handleOptionSelect} />
      {selectedOption === 'findBook' && <FindBook />}
      {selectedOption === 'notepad' && <Notepad />}
    </div>
  );
};

export default App;




