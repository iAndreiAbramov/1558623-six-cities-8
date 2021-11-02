import { ActionType, ActionTypes } from '../../types/action-types';
import { AuthorizationStatus, DEFAULT_USER_DATA } from '../../const';
import { FrontUserDataTypes } from '../../types/user-data-types';

type UserTypes= {
  authorization: AuthorizationStatus,
  currentUserData: FrontUserDataTypes,
}

const initialState: UserTypes = {
  authorization: AuthorizationStatus.Unknown,
  currentUserData: DEFAULT_USER_DATA,
}

export const userReducer = (state = initialState, action: ActionTypes): UserTypes => {
  switch (action.type) {
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorization: action.payload.authStatus,
      };

    case ActionType.SetCurrentUser: {
      return {
        ...state,
        currentUserData: action.payload.userData,
      };
    }

    case ActionType.RequireLogout:
      return {
        ...state,
        authorization: AuthorizationStatus.NoAuth,
      };

    default:
      return state;
  }
}
