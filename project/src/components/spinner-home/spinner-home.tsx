import React from 'react';
import './spinner-home.css';

function SpinnerHome(): JSX.Element {
  return (
    <div className="spinner-home-overlay">
      <div className="spinner-home-wrapper">
        <div className="spinner-home">
          <span className="visually-hidden">Please wait. Loading in progress.</span>
        </div>
      </div>
    </div>
  );
}

export default SpinnerHome;
