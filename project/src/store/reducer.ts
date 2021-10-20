import { ActionType, ActionTypes } from '../types/action-types';
import { DEFAULT_CITY_NAME } from '../const';
import { getOffersData, OFFERS_NUMBER } from '../mocks/offers';
import { State } from '../types/state';

const offersData = getOffersData(OFFERS_NUMBER);
const initialOffersData = offersData.filter((offer) => (
  offer.city.name === DEFAULT_CITY_NAME
));

const initialState: State = {
  cityName: DEFAULT_CITY_NAME,
  offersList: initialOffersData,
};

export const reducer = (state: State = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, cityName: action.payload.name };
    default:
      return state;
  }
};
