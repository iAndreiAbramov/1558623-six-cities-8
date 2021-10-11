import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { getCommentsData } from './mocks/comments';
import { getOffersData, OFFERS_NUMBER } from './mocks/offers';

ReactDOM.render(
  <React.StrictMode>
    <App
      offersData={ getOffersData(OFFERS_NUMBER) }
      commentsData={ getCommentsData() }
    />
  </React.StrictMode>,
  document.getElementById('root'));
