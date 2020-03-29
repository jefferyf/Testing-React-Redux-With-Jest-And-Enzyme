import { types } from './../../actions/types';
import postsReducer from './postsReducer';

describe('Posts Reducer', () => {
  it('should return default state', () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('should return new state if receiving type', () => {
    const posts = [
      { title: 'test1' },
      { title: 'test2' },
      { title: 'test3' }
    ]
    const newState = postsReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts
    });
    expect(newState).toEqual(posts);
  });
});