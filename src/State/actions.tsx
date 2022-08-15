import { Types } from './constants';
import { Post, User } from '../types';

export const ActionCreators = {
  login: (user: User) => ({ type: Types.LOGIN, payload: {user} }),
  getPosts: (posts: Post[]) => ({type: Types.GET_POSTS, payload: {posts}}) 
}
