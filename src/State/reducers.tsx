import { Types } from './constants';
import { User, Post } from '../types';

interface Action {
  type: string,
  payload: {
    user:User
    posts: Post[]
  }
}

const initialState = {
  user: {
    email: '',
    password: '',
    isLogged: false
  },
  posts: [] as Post[]
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case Types.LOGIN:
      return {
        ...state,
        user: action.payload.user
      }
      case Types.GET_POSTS:
        return {
          ...state,
          posts: action.payload.posts
        }
    default:
      return state;
  }
}

export default reducer;