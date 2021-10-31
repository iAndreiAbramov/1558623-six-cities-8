import {
  APIRoute,
  AuthorizationStatus,
  Cities,
  DEFAULT_USER_DATA,
  FetchStatus,
  HttpStatusCode,
} from '../const';
import { adaptCommentsToFront, adaptOffersToFront, adaptOfferToFront, adaptUserDataToFront } from '../utils/adapters';
import { BackDataTypes } from '../types/back-data-types';
import browserHistory from '../services/browser-history';
import { CommentPostTypes } from '../types/comments-types';
import { dropToken, setToken } from '../services/token';
import { dropEmail, setEmail } from '../services/email';
import {
  initCityAction,
  requireAuthorization,
  setCurrentHotel,
  setCurrentHotelComments,
  setCurrentUser,
  setFetchStatus,
  setIsFavorite,
  setNearOffersData,
} from './actions';
import { ThunkActionResult } from '../types/action-types';
import { UserLoginTypes } from '../types/user-data-types';

export const initActiveCityAction = (newCityName: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setFetchStatus(FetchStatus.InProgress));
    await api.get<BackDataTypes[]>(APIRoute.Hotels)
      .then(({ data }) => {
        const offersData = adaptOffersToFront(data)
          .filter((offer) => offer.city.name === newCityName);
        const cityData = Cities[newCityName];
        const pointsForMap = offersData.map((item) => {
          const { id } = item;
          const { latitude, longitude } = item.location;
          return { latitude, longitude, id };
        });
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

export const checkAuthAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(APIRoute.Login)
      .then(({ status }) => {
        status
        && status !== HttpStatusCode.Unauthorised
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
        dispatch(setCurrentUser(adaptUserDataToFront(data)));
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
