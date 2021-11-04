import React from 'react';
import ReactDOM from 'react-dom';
import { AuthorizationStatus } from './const';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { checkAuthAction } from './store/api-actions';
import { createApi } from './services/api';
import { requireAuthorization } from './store/actions';
import { rootReducer } from './store/reducers/root-reducer';
import { ThunkAppDispatch } from './types/action-types';

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

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
