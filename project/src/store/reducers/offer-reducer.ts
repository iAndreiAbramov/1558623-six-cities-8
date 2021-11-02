import { createReducer } from '@reduxjs/toolkit';
import { CommentsFrontTypes } from '../../types/comments-types';
import { DEFAULT_HOTEL_DATA } from '../../const';
import { OfferDataTypes } from '../../types/offer-data-types';
import { setCurrentHotel, setCurrentHotelComments, setNearOffersData } from '../actions';

export type OfferStateTypes = {
  currentHotel: OfferDataTypes,
  nearOffersData: OfferDataTypes[],
  currentHotelComments: CommentsFrontTypes[],
}

const initialState: OfferStateTypes = {
  currentHotel: DEFAULT_HOTEL_DATA,
  nearOffersData: [],
  currentHotelComments: [],
};

export const offerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentHotel, (state, action) => {
      state.currentHotel = action.payload;
    })
    .addCase(setNearOffersData, (state, action) => {
      state.nearOffersData = action.payload;
    })
    .addCase(setCurrentHotelComments, (state, action) => {
      state.currentHotelComments = action.payload;
    });
});
