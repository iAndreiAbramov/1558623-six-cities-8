import React from 'react';
import { render } from '@testing-library/react';
import HomePageEmpty from './home-page-empty';
import { TEST_CITY_NAME } from '../../const';

describe('Component HomePageEmpty', () => {
  it('should render correctly', () => {
    const { getByText } = render(<HomePageEmpty activeCityName={ TEST_CITY_NAME } />);
    expect(getByText(`We could not find any property available at the moment in ${ TEST_CITY_NAME }`)).toBeInTheDocument();
  });
});
