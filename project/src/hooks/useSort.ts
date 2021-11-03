import { OfferDataTypes } from '../types/offer-data-types';
import { SortOptions } from '../const';

export const useSort = (data: OfferDataTypes[], option: SortOptions): OfferDataTypes[] => {
  switch (option) {
    case SortOptions.PriceUp:
      return [...data].sort((a, b) => a.price - b.price);
    case SortOptions.PriceDown:
      return [...data].sort((a, b) => b.price - a.price);
    case SortOptions.RatingDown:
      return [...data].sort((a, b) => b.rating - a.rating);
    default:
      return [...data];
  }
}
