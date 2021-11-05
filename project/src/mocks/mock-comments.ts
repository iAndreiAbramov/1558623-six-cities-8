const comment = {
  comment: 'string',
  date: '',
  id: '1',
  rating: 3,
  user: {
    avatarUrl: 'someUrl',
    id: '10',
    isPro: true,
    name: 'Maria The Simple',
  }
}

const commentFirst = Object.assign({}, comment);
const commentSecond = Object.assign({}, comment);
const commentThird = Object.assign({}, comment);
const commentFourth= Object.assign({}, comment);

commentFirst.date = '2021-10-21T07:58:01.572Z';
commentSecond.date = '2021-10-20T07:58:01.572Z';
commentThird.date = '2021-10-19T07:58:01.572Z';
commentFourth.date = '2021-10-18T07:58:01.572Z';

export const defaultComments = [commentFirst, commentSecond, commentThird, commentFourth];
export const sortedComments = [commentFourth, commentThird, commentSecond, commentFirst];
