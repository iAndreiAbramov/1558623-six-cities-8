import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { getCommentsData } from './mocks/comments';
import { getOffersData } from './mocks/offers';

ReactDOM.render(
  <React.StrictMode>
    <App
      offersData={getOffersData()}
      commentsData={getCommentsData()}
    />
  </React.StrictMode>,
  document.getElementById('root'));
