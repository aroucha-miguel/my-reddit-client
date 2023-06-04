import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import subredditListing from '../services/reddit/subredditListing';
import {RootState} from './store';
import sortsConst from '../utils/sortsConst';
import {NetworkPost} from '../types/Post';

export const fetchPosts = createAsyncThunk<any, string, {state: RootState}>(
  'postsListing/fetchPosts',
  async (_arg, thunkAPI) => {
    const {subreddit, sort} = thunkAPI.getState().postsListing;
    const response = await subredditListing({subreddit, sort});
    return {posts: response.data.children, after: response.data.after};
  },
);

export const fetchMorePosts = createAsyncThunk<any, string, {state: RootState}>(
  'postsListing/fetchMorePosts',
  async (_arg, thunkAPI) => {
    const {subreddit, sort, after} = thunkAPI.getState().postsListing;
    const response = await subredditListing({subreddit, sort, after});
    return {posts: response.data.children, after: response.data.after};
  },
);

export const updatePostsSort = createAsyncThunk<
  any,
  string,
  {state: RootState}
>('postsListing/updatePostsSort', async (arg: string, thunkAPI) => {
  const {subreddit} = thunkAPI.getState().postsListing;
  const response = await subredditListing({subreddit, sort: arg});
  return {
    posts: response.data.children,
    sort: arg,
    after: response.data.after,
  };
});

export const updatePostsSubredditAndSort = createAsyncThunk<
  any,
  {subreddit: string; sort: string},
  {state: RootState}
>('postsListing/updatePostsSubredditAndSort', async arg => {
  const {subreddit, sort} = arg;
  const response = await subredditListing({subreddit, sort});
  return {
    posts: response.data.children,
    subreddit,
    sort,
    after: response.data.after,
  };
});

interface PostsListingState {
  loading: boolean;
  loadingMore: boolean;
  subreddit: string;
  sort: string;
  posts: NetworkPost[];
  after: string;
  error: string;
}

const initialState: PostsListingState = {
  loading: false,
  loadingMore: false,
  subreddit: 'pics',
  sort: sortsConst.hot,
  posts: [],
  after: '',
  error: '',
};

export const postsListingSlice = createSlice({
  name: 'postsListing',
  initialState,
  reducers: {
    clearError: state => {
      state.error = '';
    },
  },
  extraReducers(builder) {
    builder
      // fetchPosts
      .addCase(fetchPosts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.after = action.payload.after;
        state.posts = action.payload.posts;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || '';
      })
      // fetchMorePosts
      .addCase(fetchMorePosts.pending, state => {
        state.loadingMore = true;
      })
      .addCase(fetchMorePosts.fulfilled, (state, action) => {
        state.loadingMore = false;
        state.after = action.payload.after;
        state.posts = state.posts.concat(action.payload.posts);
      })
      .addCase(fetchMorePosts.rejected, (state, action) => {
        state.loadingMore = false;
        state.error = action.error.message || '';
      })
      // updatePostsSort
      .addCase(updatePostsSort.pending, state => {
        state.loading = true;
      })
      .addCase(updatePostsSort.fulfilled, (state, action) => {
        state.loading = false;
        state.after = action.payload.after;
        state.posts = action.payload.posts;
        state.sort = action.payload.sort;
      })
      .addCase(updatePostsSort.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || '';
      })
      // updatePostsSubredditAndSort
      .addCase(updatePostsSubredditAndSort.pending, state => {
        state.loading = true;
      })
      .addCase(updatePostsSubredditAndSort.fulfilled, (state, action) => {
        state.loading = false;
        state.after = action.payload.after;
        state.subreddit = action.payload.subreddit;
        state.posts = action.payload.posts;
        state.sort = action.payload.sort;
      })
      .addCase(updatePostsSubredditAndSort.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || '';
      });
  },
});

// export const {clearError} = postsListingSlice.actions;

export default postsListingSlice.reducer;
