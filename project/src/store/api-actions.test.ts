import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { APIRoute, AuthorizationStatus, DEFAULT_USER_DATA, HttpStatusCode } from '../const';
import { BackUserDataTypes, FrontUserDataTypes, UserLoginTypes } from '../types/user-data-types';
import { checkAuthAction, requestLoginAction, requestLogoutAction } from './api-actions';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createApi } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import { requireAuthorization, setCurrentUser } from './actions';
import { StateTypes } from '../types/state-types';

describe('Async actions', () => {
  const onFakeUnauthorized = jest.fn();
  const api = createApi(onFakeUnauthorized());
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    StateTypes,
    Action,
    ThunkDispatch<StateTypes, typeof api, Action>
    >(middlewares);

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

  it('should set authorization to auth and set current user data on correct login and password', async () => {
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

  it('should set authorization to no auth and reset current user data default on logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(HttpStatusCode.NoContent);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(requestLogoutAction());

    expect(store.getActions()).toEqual([
      requireAuthorization(AuthorizationStatus.NoAuth),
      setCurrentUser(DEFAULT_USER_DATA),
    ]);

    expect(Storage.prototype.removeItem).toBeCalledTimes(2);
    expect(Storage.prototype.removeItem).toBeCalledWith('six-sities-token');
    expect(Storage.prototype.removeItem).toBeCalledWith('six-sities-email');
  });
});
