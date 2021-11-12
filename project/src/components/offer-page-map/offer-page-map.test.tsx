import React from 'react';
import { render } from '@testing-library/react';
import { Cities, TEST_CITY_NAME } from '../../const';
import OfferPageMap from './offer-page-map';
import { pointsMock } from '../../mocks/mock-points';

describe('Component: OfferPageMap', () => {
  const TEST_LOCATION = Cities[TEST_CITY_NAME].location;
  const NUMBER_OF_NEARBY_POINTS = 3;
  const CURRENT_POINT_NUMBER = 3;

  it('should render and contain copyright links', () => {
    const nearbyPoints = pointsMock.slice(0, NUMBER_OF_NEARBY_POINTS);
    const currentPoint = pointsMock[CURRENT_POINT_NUMBER];

    const { getByTestId, getAllByRole } = render(
      <OfferPageMap
        cityLocation={ TEST_LOCATION }
        nearbyPoints={ nearbyPoints }
        currentPoint={ currentPoint }
      />);

    expect(getByTestId('offer-map')).toBeInTheDocument();
    expect(getAllByRole('link')).toHaveLength(3);
  });
});
