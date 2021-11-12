import React from 'react';
import { render } from '@testing-library/react';
import HomePageSortDropdown from './home-page-sort-dropdown';
import { SortOptions } from '../../const';

describe('Component: HomePageSortDropdown', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <HomePageSortDropdown
        sortOption={ SortOptions.Popular }
        clickHandler={ () => null }
      />);

    expect(getByText(SortOptions.Popular)).toBeInTheDocument();
  });
});
