import { BackDataTypes } from '../types/back-data-types';
import { OfferDataTypes } from '../types/offer-data-types';

export const adaptBackToFront = (backData: BackDataTypes[]): OfferDataTypes[] => (
  backData.map((item): OfferDataTypes => {
    return Object.assign(
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
        }
      }
    )
  })
)
