import React, { JSXElementConstructor } from 'react';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createApi } from '../services/api';
import { FakeStateTypes } from '../mocks/mock-store';

export const createFakeAppWithStore = (
  Component: JSXElementConstructor<any>,
  fakeStore: FakeStateTypes,
  fakeHistory: ReturnType<typeof createMemoryHistory>,
): JSX.Element => {

  const onFakeUnauthorized = jest.fn();
  const api = createApi(onFakeUnauthorized());
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<FakeStateTypes,
    Action,
    ThunkDispatch<FakeStateTypes, typeof api, Action>>(middlewares);

  const store = mockStore(fakeStore);

  return (
    <Provider store={ store }>
      <Router history={ fakeHistory }>
        <Component />
      </Router>
    </Provider>
  );
};
