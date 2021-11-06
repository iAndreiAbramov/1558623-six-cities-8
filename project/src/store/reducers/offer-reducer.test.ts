import { ActionType } from '../../types/action-types';
import { defaultComments } from '../../mocks/mock-comments';
import { DEFAULT_HOTEL_DATA } from '../../const';
import { offerFirst, offersFrontMock } from '../../mocks/mock-offers';
import { offerReducer } from './offer-reducer';

describe('Reducer: offerReducer', () => {
  it('should set current offer data', () => {
    expect(offerReducer(
      {
        currentHotel: DEFAULT_HOTEL_DATA,
        nearOffersData: [],
        currentHotelComments: [],
      },
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
      {
        currentHotel: DEFAULT_HOTEL_DATA,
        nearOffersData: [],
        currentHotelComments: [],
      },
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
      {
        currentHotel: DEFAULT_HOTEL_DATA,
        nearOffersData: [],
        currentHotelComments: [],
      },
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
      {
        currentHotel: DEFAULT_HOTEL_DATA,
        nearOffersData: [],
        currentHotelComments: [],
      },
      {
        type: ActionType.Unknown,
        payload: offersFrontMock,
      }
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
      {
        currentHotel: DEFAULT_HOTEL_DATA,
        nearOffersData: [],
        currentHotelComments: [],
      },
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
      {
        currentHotel: DEFAULT_HOTEL_DATA,
        nearOffersData: [],
        currentHotelComments: [],
      },
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
