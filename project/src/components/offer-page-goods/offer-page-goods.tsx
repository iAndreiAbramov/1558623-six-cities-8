import React from 'react';
import { OfferPageGoodsTypes } from '../../types/offer-page-types';

function OfferPageGoods(props: OfferPageGoodsTypes): JSX.Element {
  const { goods } = props;
  const goodsList = goods.map((item) => (
    <li className="property__inside-item" key={ item }>
      { item }
    </li>
  ));

  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        { goodsList }
      </ul>
    </div>
  );
}

export default OfferPageGoods;
