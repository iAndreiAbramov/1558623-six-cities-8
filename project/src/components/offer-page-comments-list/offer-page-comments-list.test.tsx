import React from 'react';
import { render } from '@testing-library/react';
import { defaultComments } from '../../mocks/mock-comments';
import OfferPageCommentsList from './offer-page-comments-list';

describe('Component: OfferPageCommentsList', () => {
  it('should render correctly', () => {
    const { getByText, getAllByText } = render(
      <OfferPageCommentsList
        commentsData={ defaultComments }
      />);

    expect(getByText(/Reviews/i)).toBeInTheDocument();
    expect(getByText(new RegExp(`${ defaultComments.length }`))).toBeInTheDocument();

    defaultComments.forEach((item) => {
      const { comment } = item;
      expect(getAllByText(comment)).toHaveLength(defaultComments.length);
    })
  });
});
