import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './components/app/app';
import { AuthorizationStatus } from './const';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';
import { createApi } from './services/api';
import { requireAuthorization } from './store/actions';
import { ThunkAppDispatch } from './types/action-types';
import { checkAuthAction, fetchHotelsAction } from './store/api-actions';

const api =createApi(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth))
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchHotelsAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
