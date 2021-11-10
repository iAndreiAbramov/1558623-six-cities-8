import { ActionType } from '../../types/action-types';
import { AuthorizationStatus, DEFAULT_USER_DATA } from '../../const';
import { userFront } from '../../mocks/mock-user-data';
import { userReducer } from './user-reducer';

describe('Reducer: userReducer', () => {
  it('should set authorization status to AUTH', () => {
    expect(userReducer(
      {
        authorization: AuthorizationStatus.Unknown,
        currentUserData: DEFAULT_USER_DATA,
      },
      {
        type: ActionType.RequireAuthorization,
        payload: AuthorizationStatus.Auth,
      },
    ))
      .toEqual(
        {
          authorization: AuthorizationStatus.Auth,
          currentUserData: DEFAULT_USER_DATA,
        },
      );
  });

  it('should not set authorization status to AUTH', () => {
    expect(userReducer(
      {
        authorization: AuthorizationStatus.Unknown,
        currentUserData: DEFAULT_USER_DATA,
      },
      {
        type: ActionType.Unknown,
      },
    ))
      .toEqual(
        {
          authorization: AuthorizationStatus.Unknown,
          currentUserData: DEFAULT_USER_DATA,
        },
      );
  });

  it('should set authorization status to NO_AUTH', () => {
    expect(userReducer(
      {
        authorization: AuthorizationStatus.Auth,
        currentUserData: DEFAULT_USER_DATA,
      },
      {
        type: ActionType.RequireLogout,
      },
    ))
      .toEqual(
        {
          authorization: AuthorizationStatus.NoAuth,
          currentUserData: DEFAULT_USER_DATA,
        },
      );
  });

  it('should not set authorization status to NO_AUTH', () => {
    expect(userReducer(
      {
        authorization: AuthorizationStatus.Auth,
        currentUserData: DEFAULT_USER_DATA,
      },
      {
        type: ActionType.Unknown,
      },
    ))
      .toEqual(
        {
          authorization: AuthorizationStatus.Auth,
          currentUserData: DEFAULT_USER_DATA,
        },
      );
  });

  it('should set current user data', () => {
    expect(userReducer(
      {
        authorization: AuthorizationStatus.Auth,
        currentUserData: DEFAULT_USER_DATA,
      },
      {
        type: ActionType.SetCurrentUser,
        payload: userFront,
      },
    ))
      .toEqual(
        {
          authorization: AuthorizationStatus.Auth,
          currentUserData: userFront,
        },
      );
  });

  it('should not set current user data', () => {
    expect(userReducer(
      {
        authorization: AuthorizationStatus.Auth,
        currentUserData: DEFAULT_USER_DATA,
      },
      {
        type: ActionType.Unknown,
        payload: userFront,
      },
    ))
      .toEqual(
        {
          authorization: AuthorizationStatus.Auth,
          currentUserData: DEFAULT_USER_DATA,
        },
      );
  });
});
