import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { loadOffersDataAction, requireAuthorization } from './actions';
import { ThunkActionResult } from '../types/action-types';
import { OfferDataTypes } from '../types/offer-data-types';

export const fetchHotelsAction = (): ThunkActionResult => (
  async (dispatch, getState, api): Promise<void> => {
    const { data } = await api.get<OfferDataTypes[]>(APIRoute.Hotels);
    console.log(data);
    dispatch(loadOffersDataAction(data));
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


