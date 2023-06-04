import {NetworkPost} from '../types/Post';

// adapted from:
// https://codeburst.io/javascript-array-distinct-5edc93501dc4
function uniquePosts(posts: NetworkPost[]) {
  const result = [];
  const map = new Map();
  for (const post of posts) {
    if (!map.has(post.data.id)) {
      map.set(post.data.id, true);
      result.push(post);
    }
  }
  return result;
}

export {uniquePosts};
