import { OfferDataTypes } from './offer-data-types';

export type OfferCardTypes = {
  key?: string;
  data: OfferDataTypes;
  onActiveCardChange: (newId: string) => void;
}
