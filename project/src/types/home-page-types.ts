import { OfferDataTypes } from './offer-data-types';

export type HomePageProps = {
  offersData: OfferDataTypes[];
}

export type HomeOffersProps = {
  offersData: OfferDataTypes[];
}

export type HomePageListProps = {
  offersData: OfferDataTypes[];
  onActiveCardChange: (newId: string) => void;
}

export type HomePageMapProps = {
  activeCardId: string;
}
