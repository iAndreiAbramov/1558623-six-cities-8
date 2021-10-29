import { APIRoute, AuthorizationStatus, Cities, DEFAULT_USER_DATA, FetchStatus, HttpStatusCode } from '../const';
import { adaptBackToFront, adaptSingleBackToFront, adaptUserDataToFront } from '../utils/adapters';
import { BackDataTypes } from '../types/back-data-types';
import {
  initCityAction,
  requireAuthorization,
  setCurrentHotel,
  setCurrentUser,
  setIsFavorite,
  setIsFetchingAction
} from './actions';
import { ThunkActionResult } from '../types/action-types';
import { UserLoginTypes } from '../types/user-data-types';
import { dropToken, setToken } from '../services/token';
import { dropEmail, setEmail } from '../services/email';
import browserHistory from '../services/browser-history';

export const initActiveCityAction = (newCityName: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setIsFetchingAction(FetchStatus.InProgress));
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
      .then(() => dispatch(setIsFetchingAction(FetchStatus.Success)))
      .catch(() => dispatch(setIsFetchingAction(FetchStatus.Error)));
  }
);

export const getOfferDataAction = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setIsFetchingAction(FetchStatus.InProgress));
    await api.get(`${ APIRoute.Hotels }/${ id }`)
      .then(({ data }) => {
        dispatch(setCurrentHotel(adaptSingleBackToFront(data)));
        dispatch(setIsFetchingAction(FetchStatus.Success));
      })
      .catch(() => {
        dispatch(setIsFetchingAction(FetchStatus.Error));
      });
  }
);

export const getCommentsDataAction = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(`${ APIRoute.Comments }/${ id }`)
      .then(({ data }) => {
        console.log(data);
      })
  }
);

export const getNearbyOffersAction = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(`${ APIRoute.Hotels }/${ id }/nearby`)
      .then((response) => {
        console.log(response);
      });
  }
);

export const checkAuthAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(APIRoute.Login)
      .then(({ status }) => {
        status && status !== HttpStatusCode.Unauthorised
        && dispatch(requireAuthorization(AuthorizationStatus.Auth));
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
        browserHistory.push('/');
      });
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
      });
  }
);

//todo: Это просто заготовка
export const setIsFavoriteAction = (hotelId: string, isFavoriteValue: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    // console.log(`${ APIRoute.Favorite }/:${ hotelId }/:${ isFavoriteValue }`);
    const favoriteUrl = `${ APIRoute.Favorite }/:${ hotelId }/:${ isFavoriteValue }`;
    await api.post(favoriteUrl)
      .then(({ data }) => {
        dispatch(setIsFavorite(data));
      });
  }
);
