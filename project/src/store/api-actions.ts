import { APIRoute, AuthorizationStatus, Cities, DEFAULT_USER_DATA, FetchStatus, NotificationMessage } from '../const';
import { adaptCommentsToFront, adaptOffersToFront, adaptOfferToFront, adaptUserDataToFront } from '../utils/adapters';
import { BackDataTypes } from '../types/back-data-types';
import browserHistory from '../services/browser-history';
import { dropToken, setToken } from '../services/token';
import { dropEmail, setEmail } from '../services/email';
import {
  initCityAction,
  requireAuthorization,
  setCurrentHotel,
  setCurrentHotelComments,
  setCurrentUser,
  setFavoritesData,
  setFetchStatus,
  setNearOffersData
} from './actions';
import { ThunkActionResult } from '../types/action-types';
import { UserLoginTypes } from '../types/user-data-types';
import { getPointsFromOffers, notifyError, notifyInfo } from '../utils/project-specific-utils';

export const initActiveCityAction = (newCityName: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setFetchStatus(FetchStatus.InProgress));
    await api.get<BackDataTypes[]>(APIRoute.Hotels)
      .then(({ data }) => {
        const offersData = adaptOffersToFront(data)
          .filter((offer) => offer.city.name === newCityName);
        const cityData = Cities[newCityName];
        const pointsForMap = getPointsFromOffers(offersData);
        dispatch(initCityAction(cityData, offersData, pointsForMap));
      })
      .then(() => dispatch(setFetchStatus(FetchStatus.Success)))
      .catch(() => dispatch(setFetchStatus(FetchStatus.Error)));
  }
);

export const getOfferDataAction = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setFetchStatus(FetchStatus.InProgress));
    await api.get(`${ APIRoute.Hotels }/${ id }`)
      .then(({ data }) => {
        dispatch(setCurrentHotel(adaptOfferToFront(data)));
        dispatch(setFetchStatus(FetchStatus.Success));
      })
      .catch(() => {
        notifyError(NotificationMessage.ConnectionError);
        dispatch(setFetchStatus(FetchStatus.Error));
      });
  }
);

export const getCommentsDataAction = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(`${ APIRoute.Comments }/${ id }`)
      .then(({ data }) => {
        dispatch(setCurrentHotelComments(adaptCommentsToFront(data)));
      });
  }
);

export const getNearOffersAction = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(`${ APIRoute.Hotels }/${ id }/nearby`)
      .then(({ data }) => {
        dispatch(setNearOffersData(adaptOffersToFront(data)));
      });
  }
);

export const getFavoritesDataAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setFetchStatus(FetchStatus.InProgress));
    await api.get(APIRoute.Favorite )
      .then(({ data }) => {
        dispatch(setFavoritesData(adaptOffersToFront(data)));
        dispatch(setFetchStatus(FetchStatus.Success));
      })
      .catch(() => {
        dispatch(setFetchStatus(FetchStatus.Error));
        notifyError(NotificationMessage.ConnectionError);
      });
  }
);

export const checkAuthAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      })
      .catch(() => {
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
        notifyInfo(NotificationMessage.SignIn);
      });
  });

export const requestLoginAction = (loginInfo: UserLoginTypes): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.post(APIRoute.Login, loginInfo)
      .then(({ data }) => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        setToken(data.token);
        setEmail(data.email);
        dispatch(setCurrentUser(adaptUserDataToFront(data)));
        browserHistory.push('/');
      })
      .catch(() => notifyError(NotificationMessage.AuthError));
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
