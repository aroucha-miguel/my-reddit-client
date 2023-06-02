import client from './client';

const listPosts = ({subreddit = 'pics', sort = 'hot', after = ''} = {}) => {
  return client({path: `r/${subreddit}/${sort}.json?after=${after}`});
};

export default listPosts;
