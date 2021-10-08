import { OfferDataTypes } from './offer-data-types';
import { CommentsDataTypes } from './comments-data-types';

export type AppProps = {
  offersData: OfferDataTypes[];
  commentsData: CommentsDataTypes[];
}
