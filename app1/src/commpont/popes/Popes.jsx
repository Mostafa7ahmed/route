import React, { useState } from 'react';
import './Popup.css'; // Ensure you have this file for basic styling

const Popup = ({ content, handleClose }) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>x</span>
        {content}
      </div>
    </div>
  );
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <h1>React Popup Example</h1>
      <button onClick={togglePopup}>Show Popup</button>
      {isOpen && <Popup
        content={<>
          <h2>Popup Content</h2>
          <p>This is a simple popup in React.</p>
        </>}
        handleClose={togglePopup}
      />}
    </div>
  );
};

export default App;