import React from 'react';
import { render } from '@testing-library/react';
import { Cities, TEST_CITY_NAME } from '../../const';
import HomePageMap from './home-page-map';
import { pointsMock } from '../../mocks/mock-points';

describe('Component: HomePageMap', () => {
  const TEST_ID = '1';
  const TEST_LOCATION = Cities[TEST_CITY_NAME].location;

  it('should render correctly', () => {
    const { getByTestId, getAllByRole } = render(
      <HomePageMap
        activeCardId={ TEST_ID }
        cityLocation={ TEST_LOCATION }
        pointsForMap={ pointsMock }
      />);

    expect(getByTestId('home-map')).toBeInTheDocument();
    expect(getAllByRole('link')).toHaveLength(3);
  });
});
