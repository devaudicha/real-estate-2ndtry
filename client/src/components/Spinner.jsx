// Spinner.jsx
import React from 'react';
import './Spinner.css'; // Import the CSS for spinner

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="loader"></div>
    </div>
  );
};

export default Spinner;
