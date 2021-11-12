import React from 'react';
import { render } from '@testing-library/react';
import OfferPageBookmark from './offer-page-bookmark';

describe('Component: OfferPageBookmark', () => {
  const TEST_ID = '1';
  it('should render correctly if item is favorite', () => {
    const TEST_IS_FAVORITE = true;
    const { getByText, getByRole } = render(
      <OfferPageBookmark
        isFavorite={ TEST_IS_FAVORITE }
        offerId={ TEST_ID }
        handleBookmarkClick={ () => null }
      />);

    expect(getByText(/To bookmarks/i)).toBeInTheDocument();
    expect(getByRole('button'))
      .toHaveClass('property__bookmark-button property__bookmark-button--active button');
  });

  it('should render correctly if item is not favorite', () => {
    const TEST_IS_FAVORITE = false;
    const { getByText, getByRole } = render(
      <OfferPageBookmark
        isFavorite={ TEST_IS_FAVORITE }
        offerId={ TEST_ID }
        handleBookmarkClick={ () => null }
      />);

    expect(getByText(/To bookmarks/i)).toBeInTheDocument();
    expect(getByRole('button'))
      .toHaveClass('property__bookmark-button button');
  });
});
