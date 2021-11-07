import React from 'react';
import { render } from '@testing-library/react';
import SpinnerHome from './spinner-home';

describe('Component: SpinnerOffer', () => {
  it('should render correctly', () => {
    const { getByText } = render(<SpinnerHome />);

    expect(getByText('Please wait. Loading in progress.'))
      .toBeInTheDocument();
  });
});
