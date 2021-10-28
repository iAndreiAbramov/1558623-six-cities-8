import { APIRoute, AuthorizationStatus, Cities, DEFAULT_USER_DATA, FetchStatus, HttpStatusCode } from '../const';
import { adaptBackToFront, adaptUserDataToFront } from '../utils/adapters';
import { BackDataTypes } from '../types/back-data-types';
import { Dispatch } from '@reduxjs/toolkit';
import { initCityAction, requireAuthorization, setCurrentUser, setIsFavorite, toggleIsFetchingAction } from './actions';
import { ThunkActionResult } from '../types/action-types';
import { UserLoginTypes } from '../types/user-data-types';
import { dropToken, setToken } from '../services/token';
import { dropEmail, setEmail } from '../services/email';

export const initActiveCityAction = (newCityName: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(toggleIsFetchingAction(FetchStatus.InProgress));
    await api.get<BackDataTypes[]>(APIRoute.Hotels)
      .then(({ data }) => {
        const offersData = adaptBackToFront(data)
          .filter((offer) => offer.city.name === newCityName);
        const cityData = Cities[newCityName];
        const pointsForMap = offersData.map((item) => {
          const { id } = item;
          const { latitude, longitude } = item.location;
          return { latitude, longitude, id };
        });
        dispatch(initCityAction(cityData, offersData, pointsForMap));
      })
      .then(() => dispatch(toggleIsFetchingAction(FetchStatus.Success)))
      .catch(() => dispatch(toggleIsFetchingAction(FetchStatus.Error)));
  }
);

export const checkAuthAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(APIRoute.Login)
      .then(({ status }) => {
        status && status !== HttpStatusCode.Unauthorised
        && dispatch(requireAuthorization(AuthorizationStatus.Auth))
      });
  });

export const requestLoginAction = (loginInfo: UserLoginTypes): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.post(APIRoute.Login, loginInfo)
      .then(({ data }) => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        setToken(data.token);
        setEmail(data.email);
        const adaptedUserData = adaptUserDataToFront(data);
        dispatch(setCurrentUser(adaptedUserData));
      })
  }
);

export const requestLogoutAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.delete(APIRoute.Logout)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
        dropToken();
        dropEmail();
        dispatch(setCurrentUser(DEFAULT_USER_DATA));
      })
  }
);

export const setIsFavoriteAction = (hotelId: string, isFavoriteValue: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    console.log(`${ APIRoute.Favorite }/:${ hotelId }/:${ isFavoriteValue }`);
    const favoriteUrl = `${ APIRoute.Favorite }/:${ hotelId }/:${ isFavoriteValue }`;
    (await api.post(favoriteUrl)
        .then(({ status, data }) => {
          status === 200 && console.log(data);
          dispatch(setIsFavorite(data));
        })
        .catch(({ status }) => {
          status === 401 && console.log('status 401');
        })
    );
  }
);
