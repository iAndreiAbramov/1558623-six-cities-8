export type CommentsFrontTypes = {
  comment: string,
  date: string,
  id: string,
  rating: number,
  user: {
    avatarUrl: string,
    ['avatar_url']?: string,
    id: string,
    isPro: boolean,
    ['is_pro']?: boolean,
    name: string,
  }
}

export type CommentsBackTypes = {
  comment: string,
  date: string,
  id: string,
  rating: number,
  user: {
    ['avatar_url']: string,
    id: string,
    ['is_pro']: boolean,
    name: string,
  }
}
