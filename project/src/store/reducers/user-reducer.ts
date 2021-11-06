import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_USER_DATA } from '../../const';
import { FrontUserDataTypes } from '../../types/user-data-types';
import { requireAuthorization, requireLogout, setCurrentUser } from '../actions';

type UserTypes = {
  authorization: AuthorizationStatus,
  currentUserData: FrontUserDataTypes,
};

const initialState: UserTypes = {
  authorization: AuthorizationStatus.Unknown,
  currentUserData: DEFAULT_USER_DATA,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorization = action.payload;
    })
    .addCase(setCurrentUser, (state, action) => {
      state.currentUserData = action.payload;
    })
    .addCase(requireLogout, (state) => {
      state.authorization = AuthorizationStatus.NoAuth;
    });
});
