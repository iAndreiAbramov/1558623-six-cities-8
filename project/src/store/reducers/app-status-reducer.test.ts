import { ActionType } from '../../types/action-types';
import { appStatusReducer } from './app-status-reducer';
import { FetchStatus } from '../../const';

describe('Reducer appStatusReducer', () => {
  it('should return initial state if action passes the same state', () => {
    expect(appStatusReducer(
      { fetchStatus: FetchStatus.Default },
      {
        type: ActionType.SetFetchStatus,
        payload: FetchStatus.Default,
      },
    ))
      .toEqual({ fetchStatus: FetchStatus.Default });
  });

  it('should return initial state if action passes unknown state', () => {
    expect(appStatusReducer(
      { fetchStatus: FetchStatus.Default },
      {
        type: ActionType.Unknown,
      },
    ))
      .toEqual({ fetchStatus: FetchStatus.Default });
  });

  it('should return error', () => {
    expect(appStatusReducer(
      { fetchStatus: FetchStatus.Default },
      {
        type: ActionType.SetFetchStatus,
        payload: FetchStatus.Error,
      },
    ))
      .toEqual({ fetchStatus: FetchStatus.Error });
  });
});
