import React from 'react';
import { render } from '@testing-library/react';
import { commentFirst } from '../../mocks/mock-comments';
import { MONTHS } from '../../const';
import OfferPageComment from './offer-page-comment';

describe('Component:', () => {
  it('should correctly render passed data', () => {
    const { date, user, comment } = commentFirst;
    const dateObject = new Date(date);
    const dateString = `${ MONTHS[dateObject.getMonth()] } ${ dateObject.getFullYear() }`;
    const { getByText } = render(
      <OfferPageComment
        commentData={ commentFirst }
      />);

    expect(getByText(comment)).toBeInTheDocument();
    expect(getByText(user.name)).toBeInTheDocument();
    expect(getByText(dateString)).toBeInTheDocument();
  });
});
