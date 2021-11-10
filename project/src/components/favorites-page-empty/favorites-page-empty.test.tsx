import React from 'react';
import { render } from '@testing-library/react';
import FavoritesPageEmpty from './favorites-page-empty';

describe('Component HomePageEmpty', () => {
  it('should render correctly', () => {
    const { getByText } = render(<FavoritesPageEmpty />);
    expect(getByText(/Nothing yet saved/i)).toBeInTheDocument();
    expect(getByText(/Save properties to narrow down search or plan your future trips/i)).toBeInTheDocument();
  });
});
