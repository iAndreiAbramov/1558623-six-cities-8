import { ActionType } from '../../types/action-types';
import { Cities, DEFAULT_CITY_NAME, TEST_CITY_NAME } from '../../const';
import { homeReducer } from './home-reducer';
import { offersFrontMock } from '../../mocks/mock-offers';
import { pointsMock } from '../../mocks/mock-points';

const initialState = {
  activeCity: {
    name: Cities[DEFAULT_CITY_NAME].name,
    location: {
      latitude: Cities[DEFAULT_CITY_NAME].location.latitude,
      longitude: Cities[DEFAULT_CITY_NAME].location.longitude,
      zoom: Cities[DEFAULT_CITY_NAME].location.zoom,
    },
  },
  offersData: [],
  pointsForMap: [],
};

const actionPayload = {
  offersData: offersFrontMock,
  pointsForMap: pointsMock,
  cityData: {
    name: Cities[TEST_CITY_NAME].name,
    location: {
      latitude: Cities[TEST_CITY_NAME].location.latitude,
      longitude: Cities[TEST_CITY_NAME].location.longitude,
      zoom: Cities[TEST_CITY_NAME].location.zoom,
    },
  },
}

describe('Reducer homeReducer', () => {
  it('should set current city data', () => {
    expect(homeReducer(
      initialState,
      {
        type: ActionType.InitCity,
        payload: actionPayload,
      },
    ))
      .toEqual(
        {
          offersData: offersFrontMock,
          pointsForMap: pointsMock,
          activeCity: {
            name: Cities[TEST_CITY_NAME].name,
            location: {
              latitude: Cities[TEST_CITY_NAME].location.latitude,
              longitude: Cities[TEST_CITY_NAME].location.longitude,
              zoom: Cities[TEST_CITY_NAME].location.zoom,
            },
          },
        },
      );
  });

  it('should not set current city data', () => {
    expect(homeReducer(
      initialState,
      {
        type: ActionType.Unknown,
        payload: actionPayload,
      },
    ))
      .toEqual(
        {
          activeCity: {
            name: Cities[DEFAULT_CITY_NAME].name,
            location: {
              latitude: Cities[DEFAULT_CITY_NAME].location.latitude,
              longitude: Cities[DEFAULT_CITY_NAME].location.longitude,
              zoom: Cities[DEFAULT_CITY_NAME].location.zoom,
            },
          },
          offersData: [],
          pointsForMap: [],
        },
      );
  });
});
