import { APIRoute, AuthorizationStatus, Cities, FetchStatus } from '../const';
import { adaptBackToFront } from '../utils/adapter';
import { BackDataTypes } from '../types/back-data-types';
import { initCityAction, requireAuthorization, setIsFavorite, toggleIsFetchingAction } from './actions';
import { ThunkActionResult } from '../types/action-types';
import { UserTypes } from '../types/auth-data';

export const initActiveCityAction = (newCityName: string): ThunkActionResult => (
  async (dispatch, getState, api): Promise<void> => {
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
  async (dispatch, getState, api): Promise<void> => {
    await api.get(APIRoute.Login)
      .then(() => dispatch(requireAuthorization(AuthorizationStatus.Auth)));
  }
);

export const requestAuthAction = (loginInfo: UserTypes): ThunkActionResult => (
  async (dispatch, getState, api): Promise<void> => {
    await api.post(APIRoute.Login, {
      body: {
        email: loginInfo.email,
        password: loginInfo.password,
      } as UserTypes,
    });
  }
);

export const setIsFavoriteAction = (hotelId: string, isFavoriteValue: string): ThunkActionResult => (
  async (dispatch, getState, api): Promise<void> => {
    console.log(`${ APIRoute.Favorite }/:${ hotelId }/:${ isFavoriteValue }`);
    const favoriteUrl = `${ APIRoute.Favorite }/:${ hotelId }/:${ isFavoriteValue }`;
    (await api.post(favoriteUrl)
      .then(({ status, data}) => {
        status === 200 && console.log(data);
        dispatch(setIsFavorite(data));
      })
        .catch(({ status }) => {
          status === 401 && console.log('status 401');
        })
    );
  }
);
