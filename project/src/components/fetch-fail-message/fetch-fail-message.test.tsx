import React from 'react';
import { render } from '@testing-library/react';
import FetchFailMessage from './fetch-fail-message';

describe('Component FetchFailMessage', () => {
  it('should render correctly', () => {
    const { getByText } = render(<FetchFailMessage />);

    expect(
      getByText('Failed to get data from server. Please check your network connection and try to reload the page.'))
      .toBeInTheDocument();
  });
});
