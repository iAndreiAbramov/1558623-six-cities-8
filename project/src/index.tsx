import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from '@reduxjs/toolkit';
import { getCommentsData } from './mocks/comments';
import { getOffersData, OFFERS_NUMBER } from './mocks/offers';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App
        offersData={ getOffersData(OFFERS_NUMBER) }
        commentsData={ getCommentsData() }
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
