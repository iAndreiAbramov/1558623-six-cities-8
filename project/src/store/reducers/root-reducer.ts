import {combineReducers} from 'redux';
import { favoritesReducer } from './favorites-reducer';
import { homeReducer } from './home-reducer';
import { offerReducer } from './offer-reducer';
import { appStatusReducer } from './app-status-reducer';
import { userReducer } from './user-reducer';

export enum NameSpace {
  Favorites = 'FAVORITES',
  Home = 'HOME',
  Offer = 'OFFER',
  Status = 'STATUS',
  User = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.Favorites]: favoritesReducer,
  [NameSpace.Home]: homeReducer,
  [NameSpace.Offer]: offerReducer,
  [NameSpace.Status]: appStatusReducer,
  [NameSpace.User]: userReducer,
});

export type RootStateTypes = ReturnType<typeof rootReducer>;
