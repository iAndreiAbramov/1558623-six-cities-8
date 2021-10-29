import React from 'react';
// import { OfferDataTypes } from '../../types/offer-data-types';
// import { CardArticleClasses, CardImgWrapperClasses } from '../../const';
// import OfferCard from '../offer-card/offer-card';

// type OfferPageNearListTypes = {
//   nearOffersData: OfferDataTypes[],
// }

function OfferPageNearList(): JSX.Element {
  // const { nearOffersData } = props;
  // const nearCards = nearOffersData.map((cardItem) => (
  //   <OfferCard
  //     key={ cardItem.id }
  //     data={ cardItem }
  //     articleClass={ CardArticleClasses.NEARBY_LIST }
  //     imgWrapperClass={ CardImgWrapperClasses.NEARBY_LIST }
  //   />
  // ));

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {/*{ nearCards }*/}
        </div>
      </section>
    </div>
  );
}

export default OfferPageNearList;
