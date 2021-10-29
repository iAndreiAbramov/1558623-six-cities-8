import { BackDataTypes } from '../types/back-data-types';
import { BackUserDataTypes, FrontUserDataTypes } from '../types/user-data-types';
import { OfferDataTypes } from '../types/offer-data-types';

export const adaptBackToFront = (backData: BackDataTypes[]): OfferDataTypes[] => {
  const adaptedData = backData.map((item): OfferDataTypes => (
    Object.assign(
      {},
      item,
      {
        isFavorite: item.is_favorite,
        isPremium: item.is_premium,
        maxAdults: item.max_adults,
        previewImage: item.preview_image,
      },
      {
        host: {
          avatarUrl: item.host.avatar_url,
          id: item.host.id,
          isPro: item.host.is_pro,
          name: item.host.name,
        },
      },
    )
  ));

  adaptedData.forEach((item) => {
    delete item.is_favorite;
    delete item.is_premium;
    delete item.max_adults;
    delete item.preview_image;
    delete item.host.is_pro;
    delete item.host.avatar_url;
  });
  return adaptedData;
};

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