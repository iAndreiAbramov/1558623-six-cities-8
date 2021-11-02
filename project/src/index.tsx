import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './components/app/app';
import { AuthorizationStatus, DEFAULT_CITY_NAME } from './const';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createApi } from './services/api';
import { requireAuthorization } from './store/actions';
import { ThunkAppDispatch } from './types/action-types';
import { checkAuthAction, initActiveCityAction } from './store/api-actions';
import { rootReducer } from './store/reducers/root-reducer';

export const api = createApi(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(initActiveCityAction(DEFAULT_CITY_NAME));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
