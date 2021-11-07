import React from 'react';
import { render } from '@testing-library/react';
import SpinnerOffer from './spinner-offer';

describe('Component: SpinnerOffer', () => {
  it('should render correctly', () => {
    const { getByText } = render(<SpinnerOffer />);

    expect(getByText('Please wait. Loading in progress.'))
      .toBeInTheDocument();
  });
});
