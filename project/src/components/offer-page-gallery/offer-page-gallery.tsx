import React from 'react';
import { OfferPageGalleryTypes } from '../../types/offer-page-types';

function OfferPageGallery(props: OfferPageGalleryTypes): JSX.Element {
  const { images } = props;
  const imagesGallery = images.map((item, index) => (
    <div className="property__image-wrapper" key={ item + index.toString() }>
      <img className="property__image" src={ item } alt="Interior view" />
    </div>
  ));

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        { imagesGallery }
      </div>
    </div>
  );
}

export default OfferPageGallery;
