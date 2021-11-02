import { OfferDataTypes } from '../types/offer-data-types';
import { OffersByCitiesTypes } from '../types/offer-sprecific-utils-types';

export const getOffersByCities = (data: OfferDataTypes[]): OffersByCitiesTypes => {
  const offersByCities: OffersByCitiesTypes = {};
  data.forEach((item) => {
    const city: string = item.city.name;
    if (city in offersByCities) {
      offersByCities[city].push(item);
    } else {
      offersByCities[city] = [item];
    }
  });

  return offersByCities;
};
