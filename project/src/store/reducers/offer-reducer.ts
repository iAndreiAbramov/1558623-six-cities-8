import { DEFAULT_HOTEL_DATA } from '../../const';
import { ActionType, ActionTypes } from '../../types/action-types';
import { OfferDataTypes } from '../../types/offer-data-types';
import { CommentsFrontTypes } from '../../types/comments-types';

export type OfferStateTypes = {
  currentHotel: OfferDataTypes,
  nearOffersData: OfferDataTypes[],
  currentHotelComments: CommentsFrontTypes[],
}

const initialState: OfferStateTypes = {
  currentHotel: DEFAULT_HOTEL_DATA,
  nearOffersData: [],
  currentHotelComments: [],
}

export const offerReducer = (state = initialState, action: ActionTypes): OfferStateTypes => {
  switch (action.type) {
    case ActionType.SetCurrentHotel:
      return {
        ...state,
        currentHotel: action.payload.currentHotel,
      };

    case ActionType.SetNearOffersData:
      return {
        ...state,
        nearOffersData: action.payload.nearOffersData,
      };

    case ActionType.SetCurrentHotelComments:
      return {
        ...state,
        currentHotelComments: action.payload.currentHotelComments,
      };

    default:
      return state;
  }
}
