import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { APIRoute, AuthorizationStatus, DEFAULT_USER_DATA, FetchStatus, HttpStatusCode } from '../const';
import { UserLoginTypes } from '../types/user-data-types';
import {
  checkAuthAction, getCommentsDataAction,
  getFavoritesDataAction,
  getNearOffersAction, getOfferDataAction,
  requestLoginAction,
  requestLogoutAction
} from './api-actions';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createApi } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import {
  requireAuthorization, setCurrentHotel,
  setCurrentHotelComments,
  setCurrentUser,
  setFavoritesData,
  setFetchStatus,
  setNearOffersData
} from './actions';
import { StateTypes } from '../types/state-types';
import { offerBackFirst, offersBackMock } from '../mocks/mock-offers';
import { adaptCommentsToFront, adaptOffersToFront, adaptOfferToFront } from '../utils/adapters';
import { userBack, userFront } from '../mocks/mock-user-data';
import { defaultBackComments, defaultComments } from '../mocks/mock-comments';

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

  it('checkAuthAction should set authorization status to auth on reply code 200', async () => {
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

  it('checkAuthAction should set authorization status to NoAuth on reply code 401', async () => {
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

  it('checkAuthAction should set authorization status to NoAuth on error', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .networkError();

    await store.dispatch(checkAuthAction());

    expect(store.getActions()).toEqual([requireAuthorization(AuthorizationStatus.NoAuth)]);
  });

  it('requestLoginAction should should dispatch it\'s sequence of actions', async () => {
    const fakeUserCredentials: UserLoginTypes = { email: 'me@me.com', password: 'qwerty' };

    mockAPI
      .onPost(APIRoute.Login)
      .reply(HttpStatusCode.Ok, userBack);

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(requestLoginAction(fakeUserCredentials));

    expect(store.getActions()).toEqual([
      requireAuthorization(AuthorizationStatus.Auth),
      setCurrentUser(userFront),
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(2);
    expect(Storage.prototype.setItem).toBeCalledWith('six-sities-token', 'secret');
    expect(Storage.prototype.setItem).toBeCalledWith('six-sities-email', 'fakeEmail');
  });

  it('requestLogoutAction should dispatch it\'s sequence of actions', async () => {
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

  it('getFavoritesDataAction should dispatch it\'s sequence of actions', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(HttpStatusCode.Ok, offersBackMock);

    await store.dispatch(getFavoritesDataAction());

    expect(store.getActions()).toEqual([
      setFetchStatus(FetchStatus.InProgress),
      setFavoritesData(adaptOffersToFront(offersBackMock)),
      setFetchStatus(FetchStatus.Success),
    ]);
  });

  it('getFavoritesDataAction should set correct fetch status on error', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Favorite)
      .networkError();

    await store.dispatch(getFavoritesDataAction());

    expect(store.getActions()).toEqual([
      setFetchStatus(FetchStatus.InProgress),
      setFetchStatus(FetchStatus.Error),
    ]);
  });

  it('getNearOffersAction should dispatch setNearOffersData with correct data', async () => {
    const FAKE_ID = '1';
    const store = mockStore();
    mockAPI
      .onGet(`${ APIRoute.Hotels }/${ FAKE_ID }/nearby`)
      .reply(HttpStatusCode.Ok, offersBackMock);

    await store.dispatch(getNearOffersAction(FAKE_ID));

    expect(store.getActions()).toEqual([setNearOffersData(adaptOffersToFront(offersBackMock))]);
  });

  it('getCommentsDataAction should dispatch setCurrentHotelComments with correct data', async () => {
    const store = mockStore();
    const fakeId = '1';
    mockAPI
      .onGet(`${ APIRoute.Comments }/${ fakeId }`)
      .reply(HttpStatusCode.Ok, defaultBackComments);

    await store.dispatch(getCommentsDataAction(fakeId));

    expect(store.getActions()).toEqual([setCurrentHotelComments(adaptCommentsToFront(defaultBackComments))]);
  });

  it('getOfferDataAction should should dispatch it\'s sequence of actions', async () => {
    const store = mockStore();
    const fakeId = '1';
    mockAPI
      .onGet(`${ APIRoute.Hotels }/${ fakeId }`)
      .reply(HttpStatusCode.Ok, offerBackFirst);

    await store.dispatch(getOfferDataAction(fakeId));

    expect(store.getActions()).toEqual([
      setFetchStatus(FetchStatus.InProgress),
      setCurrentHotel(adaptOfferToFront(offerBackFirst)),
      setFetchStatus(FetchStatus.Success),
    ]);
  });

  it('getOfferDataAction should set correct fetch status on error', async () => {
    const store = mockStore();
    const fakeId = '1';
    mockAPI
      .onGet(`${ APIRoute.Hotels }/${ fakeId }`)
      .networkError();

    await store.dispatch(getOfferDataAction(fakeId));

    expect(store.getActions()).toEqual([
      setFetchStatus(FetchStatus.InProgress),
      setFetchStatus(FetchStatus.Error),
    ]);
  });
});
