import { ActionType } from '../../types/action-types';
import { appStatusReducer } from './app-status-reducer';
import { FetchStatus } from '../../const';

describe('Reducer appStatusReducer', () => {
  it('should not change state if action passes the same state', () => {
    expect(appStatusReducer(
      { fetchStatus: FetchStatus.Default },
      {
        type: ActionType.SetFetchStatus,
        payload: FetchStatus.Default,
      },
    ))
      .toEqual({ fetchStatus: FetchStatus.Default });
  });

  it('should not change fetch status', () => {
    expect(appStatusReducer(
      { fetchStatus: FetchStatus.Default },
      {
        type: ActionType.Unknown,
      },
    ))
      .toEqual({ fetchStatus: FetchStatus.Default });
  });

  it('should set fetch status to Error', () => {
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
