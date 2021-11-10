import React from 'react';
import { render } from '@testing-library/react';
import OfferCardBookmark from './offer-card-bookmark';

describe('Component: OfferCardBookmark', () => {
  const TEST_ID = '1';
  it('should render correctly if item is favorite', () => {
    const TEST_IS_FAVORITE = true;
    const { getByText, getByRole } = render(
      <OfferCardBookmark
        isFavorite={ TEST_IS_FAVORITE }
        offerId={ TEST_ID }
        handleBookmarkClick={ () => null }
      />);

    expect(getByText(/To bookmarks/i)).toBeInTheDocument();
    expect(getByRole('button')).toHaveClass('place-card__bookmark-button place-card__bookmark-button--active button');
  });

  it('should render correctly if item is not favorite', () => {
    const TEST_IS_FAVORITE = false;
    const { getByText, getByRole } = render(
      <OfferCardBookmark
        isFavorite={ TEST_IS_FAVORITE }
        offerId={ TEST_ID }
        handleBookmarkClick={ () => null }
      />);

    expect(getByText(/To bookmarks/i)).toBeInTheDocument();
    expect(getByRole('button')).toHaveClass('place-card__bookmark-button button');
  });
});
