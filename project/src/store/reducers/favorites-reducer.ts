import { ActionType, ActionTypes } from '../../types/action-types';
import { OfferDataTypes } from '../../types/offer-data-types';

export type FavoritesStateTypes = {
  favoritesData: OfferDataTypes[];
}

const initialState: FavoritesStateTypes = {
  favoritesData: [],
};

export const favoritesReducer = (state = initialState, action: ActionTypes): FavoritesStateTypes => {
  switch (action.type) {
    case ActionType.SetFavoritesData:
      return {
        ...state,
        favoritesData: action.payload.favoritesData,
      };
    default:
      return state;
  }
};
