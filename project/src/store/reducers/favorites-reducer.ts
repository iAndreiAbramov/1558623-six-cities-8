import { createReducer } from '@reduxjs/toolkit';
import { OfferDataTypes } from '../../types/offer-data-types';
import { setFavoritesData } from '../actions';

export type FavoritesStateTypes = {
  favoritesData: OfferDataTypes[] | [];
}

const initialState: FavoritesStateTypes = {
  favoritesData: [],
};

export const favoritesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFavoritesData, (state, action) => {
      state.favoritesData = action.payload;
    });
});
