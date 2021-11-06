import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { APIRoute, AuthorizationStatus, HttpStatusCode } from '../const';
import { checkAuthAction, requestLoginAction } from './api-actions';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createApi } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import { requireAuthorization, setCurrentUser } from './actions';
import { StateTypes } from '../types/state-types';
import { BackUserDataTypes, FrontUserDataTypes, UserLoginTypes } from '../types/user-data-types';

describe('Async actions', () => {
  const onFakeUnauthorized = jest.fn();
  const api = createApi(onFakeUnauthorized());
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<StateTypes,
    Action,
    ThunkDispatch<StateTypes, typeof api, Action>>(middlewares);

  it('should set authorization status as auth on reply code 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(HttpStatusCode.Ok, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    expect(store.getActions()).toEqual([
      requireAuthorization(AuthorizationStatus.Auth),
    ]);
  });

  it('should set authorization status as NoAuth on reply code 401', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(HttpStatusCode.Unauthorised, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    expect(store.getActions()).toEqual([
      requireAuthorization(AuthorizationStatus.NoAuth),
    ]);
  });

  it('should dispatch requireAuthorization and setCurrentUser actions on correct login and password', async () => {
    const fakeUserCredentials: UserLoginTypes = { email: 'me@me.com', password: 'qwerty' };
    const fakeUserBackData: BackUserDataTypes = {
      ['avatar_url']: 'fakeAvatar',
      email: 'fakeEmail',
      id: 'fakeId',
      ['is_pro']: true,
      name: 'fakeName',
      token: 'secret',
    };

    const fakeUserFrontData: FrontUserDataTypes = {
      avatarUrl: 'fakeAvatar',
      email: 'fakeEmail',
      id: 'fakeId',
      isPro: true,
      name: 'fakeName',
    };

    mockAPI
      .onPost(APIRoute.Login)
      .reply(HttpStatusCode.Ok, fakeUserBackData);

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(requestLoginAction(fakeUserCredentials));

    expect(store.getActions()).toEqual([
      requireAuthorization(AuthorizationStatus.Auth),
      setCurrentUser(fakeUserFrontData),
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(2);
    expect(Storage.prototype.setItem).toBeCalledWith('six-sities-token', 'secret');
    expect(Storage.prototype.setItem).toBeCalledWith('six-sities-email', 'fakeEmail');
  });
});
