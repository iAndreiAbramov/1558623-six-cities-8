import { APIRoute, AuthorizationStatus, Cities } from '../const';
import { initCityAction, requireAuthorization } from './actions';
import { ThunkActionResult } from '../types/action-types';
import { adaptBackToFront } from '../utils/adapter';
import { BackDataTypes } from '../types/back-data-types';

export const initActiveCityAction = (newCityName: string): ThunkActionResult => (
  async (dispatch, getState, api): Promise<void> => {
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
    dispatch(initCityAction(cityData, offersData, pointsForMap));
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
