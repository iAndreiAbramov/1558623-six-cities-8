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
  nearOffersData: OfferDataTypes[],
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

export type OfferPageNearListTypes = {
  nearOffersData: OfferDataTypes[];
}

export type OfferPageNearCardTypes = {
  key?: string;
  pageData: OfferDataTypes;
}

export type OfferPageCommentsListTypes = {
  commentsData: CommentsDataTypes[],
}

export type OfferPageCommentTypes = {
  key?: string,
  commentData: CommentsDataTypes,
}
