import client from './client';

const listPosts = ({subreddit = 'pics', sort = 'hot'} = {}) => {
  return client({path: `r/${subreddit}/${sort}.json`});
};

export default listPosts;
