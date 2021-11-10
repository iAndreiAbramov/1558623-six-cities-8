import React from 'react';
import { render } from '@testing-library/react';
import HomePageSortToggler from './home-page-sort-toggler';
import { SortOptions } from '../../const';

describe('Component: HomePageSortToggler', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <HomePageSortToggler
        clickHandler={ () => null }
      />);

    expect(getByText(new RegExp(SortOptions.Popular, 'i'))).toBeInTheDocument();
    expect(getByText(new RegExp(SortOptions.PriceDown, 'i'))).toBeInTheDocument();
    expect(getByText(new RegExp(SortOptions.PriceUp, 'i'))).toBeInTheDocument();
    expect(getByText(new RegExp(SortOptions.RatingDown, 'i'))).toBeInTheDocument();
  });
});
