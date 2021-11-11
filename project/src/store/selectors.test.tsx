import React, { ReactChild, ReactChildren } from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { mockStoreWithAuth } from '../mocks/mock-store';
import { Provider, useSelector } from 'react-redux';
import { renderHook } from '@testing-library/react-hooks';
import { AuthorizationStatus, Cities, DEFAULT_CITY_NAME, FetchStatus } from '../const';
import { defaultComments } from '../mocks/mock-comments';
import {
  getActiveCity,
  getAuthorizationStatus,
  getCurrentHotel,
  getCurrentHotelComments,
  getCurrentUserData,
  getFavoritesData,
  getFetchStatus,
  getNearOffersData,
  getOffersData,
  getPointsForMap
} from './selectors';
import { nearOffersMock, offerFirst, offersFrontMock, pointsMock } from '../mocks/mock-offers';

export interface AuxProps {
  children: ReactChild | ReactChildren;
}

describe('Selector:', () => {
  const mockStore = configureMockStore();
  const store = mockStore(mockStoreWithAuth);
  const wrapper = ({ children }: AuxProps) => (<Provider store={ store }>{ children }</Provider>);

  it('getAuthorizationStatus should return correct data', () => {
    const { result } = renderHook(() => useSelector(getAuthorizationStatus), { wrapper });
    expect(result.current).toBe(AuthorizationStatus.Auth);
  });

  it('getCurrentUserData should return correct data', () => {
    const { result } = renderHook(() => useSelector(getCurrentUserData), { wrapper });
    expect(result.current).toEqual({ email: 'fake@email.com' });
  });

  it('getFetchStatus should return correct data', () => {
    const { result } = renderHook(() => useSelector(getFetchStatus), { wrapper });
    expect(result.current).toBe(FetchStatus.Success);
  });

  it('getCurrentHotel should return correct data', () => {
    const { result } = renderHook(() => useSelector(getCurrentHotel), { wrapper });
    expect(result.current).toEqual(offerFirst);
  });

  it('getNearOffersData should return correct data', () => {
    const { result } = renderHook(() => useSelector(getNearOffersData), { wrapper });
    expect(result.current).toEqual(nearOffersMock);
  });

  it('getCurrentHotelComments should return correct data', () => {
    const { result } = renderHook(() => useSelector(getCurrentHotelComments), { wrapper });
    expect(result.current).toEqual(defaultComments);
  });

  it('getFavoritesData should return correct data', () => {
    const { result } = renderHook(() => useSelector(getFavoritesData), { wrapper });
    expect(result.current).toEqual(offersFrontMock);
  });

  it('getActiveCity should return correct data', () => {
    const { result } = renderHook(() => useSelector(getActiveCity), { wrapper });
    expect(result.current).toEqual(Cities[DEFAULT_CITY_NAME]);
  });

  it('getOffersData should return correct data', () => {
    const { result } = renderHook(() => useSelector(getOffersData), { wrapper });
    expect(result.current).toEqual(offersFrontMock);
  });

  it('getPointsForMap should return correct data', () => {
    const { result } = renderHook(() => useSelector(getPointsForMap), { wrapper });
    expect(result.current).toEqual(pointsMock);
  });
});
