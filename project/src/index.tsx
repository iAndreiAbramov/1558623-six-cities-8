import React from 'react';
import ReactDOM from 'react-dom';
import { AuthorizationStatus, DEFAULT_CITY_NAME } from './const';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './components/app/app';
import browserHistory from './services/browser-history';
import { checkAuthAction, initActiveCityAction } from './store/api-actions';
import { createApi } from './services/api';
import { requireAuthorization } from './store/actions';
import { rootReducer } from './store/reducers/root-reducer';
import { ThunkAppDispatch } from './types/action-types';
import { Router } from 'react-router-dom';

export const api = createApi(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(initActiveCityAction(DEFAULT_CITY_NAME));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <ToastContainer />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
