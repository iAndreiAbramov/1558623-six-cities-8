import { ActionType } from '../../types/action-types';
import { favoritesReducer } from './favorites-reducer';
import { offersFrontMock } from '../../mocks/mock-offers';

describe('Reducer: favoritesReducer', () => {
  it('should set passed state', () => {
    expect(favoritesReducer(
      { favoritesData: [] },
      {
        type: ActionType.SetFavoritesData,
        payload: offersFrontMock,
      },
    ))
      .toEqual({ favoritesData: offersFrontMock });
  });

  it('should not change state if unknown action passed', () => {
    expect(favoritesReducer(
      { favoritesData: offersFrontMock.slice() },
      {
        type: ActionType.Unknown,
      },
    ))
      .toEqual({ favoritesData: offersFrontMock });
  });
});
