import React from 'react';
import { render } from '@testing-library/react';
import OfferPageGallery from './offer-page-gallery';

describe('Component: OfferPageGallery', () => {
  it('should render all passed images', () => {
    const fakeImages = ['src1', 'src2', 'src3', 'src4', 'src5', 'src6'];
    const { getAllByAltText } = render(
      <OfferPageGallery
        images={ fakeImages }
      />);

    expect(getAllByAltText(/Interior view/i)).toHaveLength(fakeImages.length);
  });
});
