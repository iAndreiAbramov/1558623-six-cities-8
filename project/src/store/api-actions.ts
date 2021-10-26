import { APIRoute, AuthorizationStatus, Cities, FetchStatus } from '../const';
import { adaptBackToFront } from '../utils/adapter';
import { BackDataTypes } from '../types/back-data-types';
import { initCityAction, requireAuthorization, toggleIsFetchingAction } from './actions';
import { ThunkActionResult } from '../types/action-types';

export const initActiveCityAction = (newCityName: string): ThunkActionResult => (
  async (dispatch, getState, api): Promise<void> => {
    dispatch(toggleIsFetchingAction(FetchStatus.InProgress));
    const { data } = await api.get<BackDataTypes[]>(APIRoute.Hotels);
    const offersData = adaptBackToFront(data)
      .filter((offer) => offer.city.name === newCityName);
    const cityData = Cities[newCityName];
    const pointsForMap = offersData.map((item) => {
      const { id } = item;
      const { latitude, longitude } = item.location;
      return {
        latitude,
        longitude,
        offerId: id,
      };
    });
    await dispatch(initCityAction(cityData, offersData, pointsForMap));
    await dispatch(toggleIsFetchingAction(FetchStatus.Success));
  }
);

export const checkAuthAction = (): ThunkActionResult => (
  async (dispatch, getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth))
      });
  }
);
