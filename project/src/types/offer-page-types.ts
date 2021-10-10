import { OfferDataTypes } from './offer-data-types';
import { CommentsDataTypes } from './comments-data-types';

export type OfferPageTypes = {
  authorizationStatus: 'AUTH' | 'NO_AUTH',
  offersData: OfferDataTypes[],
  commentsData: CommentsDataTypes[],
}

export type OfferPageMainTypes = {
  authorizationStatus: 'AUTH' | 'NO_AUTH',
  pageData: OfferDataTypes,
  commentsData: CommentsDataTypes[],
}

export type OfferPageGalleryTypes = {
  images: string[];
}

export type OfferPageGoodsTypes = {
  goods: string[];
}

export type OfferPageHostTypes = {
  host: {
    avatarUrl: string;
    id: string;
    isPro: boolean;
    name: string;
  };
}
