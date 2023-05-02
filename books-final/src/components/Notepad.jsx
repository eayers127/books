import React, { useState } from 'react';

const Notepad = () => {
  const [notes, setNotes] = useState('');
  const [savedNotes, setSavedNotes] = useState([]);

  const handleChange = (event) => {
    setNotes(event.target.value);
  };

  const handleSave = (event) => {
    setSavedNotes(event.target.value);
  }

  return (
    <div>
      <h1>Notepad</h1>
      <textarea rows="20" cols="50" value={notes} onChange={handleChange} />
      <div>
        <button onClick={handleSave}>Save Note</button>
      </div>
    </div>
  );
};

export default Notepad;
