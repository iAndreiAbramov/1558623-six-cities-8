import { APIRoute, AuthorizationStatus } from '../const';
import { loadOffersDataAction, requireAuthorization } from './actions';
import { ThunkActionResult } from '../types/action-types';
import { adaptBackToFront } from '../utils/adapter';
import { BackDataTypes } from '../types/back-data-types';

export const fetchHotelsAction = (): ThunkActionResult => (
  async (dispatch, getState, api): Promise<void> => {
    const { data } = await api.get<BackDataTypes[]>(APIRoute.Hotels);
    const adaptedData = adaptBackToFront(data)
      .filter((offer) => (
        offer.city.name === getState().activeCity.name
      ));
    const pointsForMap = adaptedData.map((item) => {
      const { id } = item;
      const { latitude, longitude } = item.location;
      return {
        latitude,
        longitude,
        offerId: id,
      };
    });
    dispatch(loadOffersDataAction(adaptedData, pointsForMap));
  }
)

export const checkAuthAction = (): ThunkActionResult => (
  async (dispatch, getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth))
      });
  }
)


