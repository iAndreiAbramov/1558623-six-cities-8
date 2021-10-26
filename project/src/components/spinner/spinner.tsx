import React from 'react';
import './spinner.css';

function Spinner(): JSX.Element {
  return (
    <div className="spinner-overlay">
      <div className="spinner-wrapper">
        <div className="spinner">
          <span className="visually-hidden">Please wait. Loading in progress.</span>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
