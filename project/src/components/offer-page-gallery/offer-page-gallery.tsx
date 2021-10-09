import React from 'react';
import { OfferPageGalleryTypes } from '../../types/offer-page-types';

function OfferPageGallery(props: OfferPageGalleryTypes): JSX.Element {
  const { images } = props;
  const imagesGallery = images.map((item) => (
    <div className="property__image-wrapper" key={ item }>
      <img className="property__image" src={ item } alt="Interior photo" />
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
