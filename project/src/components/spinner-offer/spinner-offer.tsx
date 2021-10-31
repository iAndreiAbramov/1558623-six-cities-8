import React from 'react';
import './spinner-offer.css';

function SpinnerOffer(): JSX.Element {
  return (
    <div className="spinner-offer-overlay">
      <div className="spinner-offer-wrapper">
        <div className="spinner-offer">
          <span className="visually-hidden">Please wait. Loading in progress.</span>
        </div>
      </div>
    </div>
  );
}

export default SpinnerOffer;
