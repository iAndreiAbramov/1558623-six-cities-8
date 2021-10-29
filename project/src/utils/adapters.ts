import { BackDataTypes } from '../types/back-data-types';
import { BackUserDataTypes, FrontUserDataTypes } from '../types/user-data-types';
import { OfferDataTypes } from '../types/offer-data-types';

export const adaptSingleBackToFront = (backData: BackDataTypes): OfferDataTypes => {
const adaptedData = Object.assign(
  {},
  backData,
  {
    isFavorite: backData.is_favorite,
    isPremium: backData.is_premium,
    maxAdults: backData.max_adults,
    previewImage: backData.preview_image,
  },
  {
    host: {
      avatarUrl: backData.host.avatar_url,
      id: backData.host.id,
      isPro: backData.host.is_pro,
      name: backData.host.name,
    },
  },
  ) as OfferDataTypes;

  delete adaptedData.is_favorite;
  delete adaptedData.is_premium;
  delete adaptedData.max_adults;
  delete adaptedData.preview_image;
  delete adaptedData.host.is_pro;
  delete adaptedData.host.avatar_url;

  return adaptedData;
};

export const adaptBackToFront = (backData: BackDataTypes[]): OfferDataTypes[] => (
  backData.map((item): OfferDataTypes => (
    adaptSingleBackToFront(item)
  ))
);

export const adaptUserDataToFront = (backUserData: BackUserDataTypes): FrontUserDataTypes => {
  const { email, id, name } = backUserData;
  return {
    avatarUrl: backUserData.avatar_url,
    isPro: backUserData.is_pro,
    email,
    id,
    name,
  };
};
