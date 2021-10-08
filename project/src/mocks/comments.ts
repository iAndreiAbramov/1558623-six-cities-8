import { getRandomBoolean, getRandomFloat, getRandomInteger, getUniqueId } from '../utils/commonUtils';
import { getRandomAvatar, getRandomName } from '../utils/offerSpecificUtils';
import { CommentsDataTypes } from '../types/comments-data-types';

const MIN_NUMBER_OF_COMMENTS = 0;
const MAX_NUMBER_OF_COMMENTS = 5;
const MIN_RATING = 1;
const MAX_RATING = 5;
const RATING_DECIMALS = 1;

const getComment = (): CommentsDataTypes => ({
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: '2019-05-08T14:13:56.569Z',
  id: getUniqueId(),
  rating: getRandomFloat(MIN_RATING, MAX_RATING, RATING_DECIMALS),
  user: {
    avatarUrl: getRandomAvatar(),
    id: getUniqueId(),
    isPro: getRandomBoolean(),
    name: getRandomName(),
  }
});

export const getCommentsData = (): CommentsDataTypes[] => {
  const comments = [];
  const numberOfComments = getRandomInteger(MIN_NUMBER_OF_COMMENTS, MAX_NUMBER_OF_COMMENTS);
  for (let i = 0; i < numberOfComments; i++) {
    comments.push(getComment());
  }
  return comments;
}
