import {
  getRandomArrayItem,
  getRandomBoolean,
  getRandomFloat,
  getRandomInteger,
  getUniqueId
} from '../utils/common-utils';
import { getRandomAvatar, getRandomName } from '../utils/offer-specific-utils';
import { CommentsFrontTypes } from '../types/comments-types';

const MIN_NUMBER_OF_COMMENTS = 0;
const MAX_NUMBER_OF_COMMENTS = 10;
const MIN_RATING = 1;
const MAX_RATING = 5;
const RATING_DECIMALS = 1;

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'August'];
const YEARS = ['2019', '2020', '2021'];

const getComment = (): CommentsFrontTypes => ({
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: `${ getRandomArrayItem(MONTHS) } ${ getRandomArrayItem(YEARS) }`,
  id: getUniqueId(),
  rating: getRandomFloat(MIN_RATING, MAX_RATING, RATING_DECIMALS),
  user: {
    avatarUrl: getRandomAvatar(),
    id: getUniqueId(),
    isPro: getRandomBoolean(),
    name: getRandomName(),
  },
});

export const getCommentsData = (): CommentsFrontTypes[] => {
  const comments = [];
  const numberOfComments = getRandomInteger(MIN_NUMBER_OF_COMMENTS, MAX_NUMBER_OF_COMMENTS);
  for (let i = 0; i < numberOfComments; i++) {
    comments.push(getComment());
  }
  return comments;
};
