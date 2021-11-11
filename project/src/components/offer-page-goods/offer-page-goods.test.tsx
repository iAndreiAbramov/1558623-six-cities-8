import React from 'react';
import { render } from '@testing-library/react';
import OfferPageGoods from './offer-page-goods';

describe('Component: OfferPageGoods', () => {
  it('should correctly render passed data', () => {
    const goods = ['washer', 'conditioner', 'fridge', 'hot water'];
    const { getByText } = render(
      <OfferPageGoods
        goods={ goods }
      />);

    expect(getByText(/What.* inside/i)).toBeInTheDocument();
    goods.forEach((item) => {
      expect(getByText(item)).toBeInTheDocument();
    })
  });
});
