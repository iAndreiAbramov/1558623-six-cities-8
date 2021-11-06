import { createReducer } from '@reduxjs/toolkit';
import { FetchStatus } from '../../const';
import { setFetchStatus } from '../actions';

export type AppStatusTypes = {
  fetchStatus: FetchStatus,
}

const initialState: AppStatusTypes = {
  fetchStatus: FetchStatus.Default,
};

export const appStatusReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFetchStatus, (state, action) => {
      state.fetchStatus = action.payload;
    });
});
