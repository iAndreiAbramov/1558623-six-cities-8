import { ActionType } from '../../types/action-types';
import { defaultComments } from '../../mocks/mock-comments';
import { DEFAULT_HOTEL_DATA } from '../../const';
import { offerFirst, offersFrontMock } from '../../mocks/mock-offers';
import { offerReducer } from './offer-reducer';

const initialState = {
  currentHotel: DEFAULT_HOTEL_DATA,
  nearOffersData: [],
  currentHotelComments: [],
};

describe('Reducer: offerReducer', () => {
  it('should set current offer data', () => {
    expect(offerReducer(
      initialState,
      {
        type: ActionType.SetCurrentHotel,
        payload: offerFirst,
      },
    ))
      .toEqual(
        {
          currentHotel: offerFirst,
          nearOffersData: [],
          currentHotelComments: [],
        },
      );
  });

  it('should not set current offer data', () => {
    expect(offerReducer(
      initialState,
      {
        type: ActionType.Unknown,
        payload: offerFirst,
      },
    ))
      .toEqual(
        {
          currentHotel: DEFAULT_HOTEL_DATA,
          nearOffersData: [],
          currentHotelComments: [],
        },
      );
  });

  it('should set near offers data', () => {
    expect(offerReducer(
      initialState,
      {
        type: ActionType.SetNearOffersData,
        payload: offersFrontMock,
      },
    ))
      .toEqual(
        {
          currentHotel: DEFAULT_HOTEL_DATA,
          nearOffersData: offersFrontMock,
          currentHotelComments: [],
        },
      );
  });

  it('should not set near offers data', () => {
    expect(offerReducer(
      initialState,
      {
        type: ActionType.Unknown,
        payload: offersFrontMock,
      },
    ))
      .toEqual(
        {
          currentHotel: DEFAULT_HOTEL_DATA,
          nearOffersData: [],
          currentHotelComments: [],
        },
      );
  });

  it('should set current hotel comments', () => {
    expect(offerReducer(
      initialState,
      {
        type: ActionType.SetCurrentHotelComments,
        payload: defaultComments,
      },
    ))
      .toEqual(
        {
          currentHotel: DEFAULT_HOTEL_DATA,
          nearOffersData: [],
          currentHotelComments: defaultComments,
        },
      );
  });

  it('should not set current hotel comments', () => {
    expect(offerReducer(
      initialState,
      {
        type: ActionType.Unknown,
        payload: defaultComments,
      },
    ))
      .toEqual(
        {
          currentHotel: DEFAULT_HOTEL_DATA,
          nearOffersData: [],
          currentHotelComments: [],
        },
      );
  });
});
