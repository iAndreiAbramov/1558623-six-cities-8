import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  DEFAULT_OFFERS_NUMBER: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App offersNumber={ Setting.DEFAULT_OFFERS_NUMBER } />
  </React.StrictMode>,
  document.getElementById('root'));
