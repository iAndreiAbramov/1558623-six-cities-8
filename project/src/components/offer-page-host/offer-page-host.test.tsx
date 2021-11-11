import React from 'react';
import { render } from '@testing-library/react';
import OfferPageHost from './offer-page-host';

describe('Component: OfferPageHost', () => {
  it('should correctly render passed data', () => {
    const fakeHost = {
      avatarUrl: 'fakeUrl',
      id: 'fakeId',
      isPro: true,
      name: 'fakeName',
    };

    const { getByText, getByAltText } = render(
      <OfferPageHost
        host={ fakeHost }
      />);

    expect(getByText(/Meet the host/i)).toBeInTheDocument();
    expect(getByAltText(/Host avatar/i)).toBeInTheDocument();
    expect(getByText(fakeHost.name)).toBeInTheDocument();
  });
});
