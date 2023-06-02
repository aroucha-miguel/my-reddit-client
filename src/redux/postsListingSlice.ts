import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import subredditListing from '../services/reddit/subredditListing';
import {RootState} from './store';

export const fetchPosts = createAsyncThunk(
  'postsListing/fetchPosts',
  async () => {
    const response = await subredditListing();
    return {posts: response.data.children, after: response.data.after};
  },
);

export const fetchMorePosts = createAsyncThunk<any, string, {state: RootState}>(
  'postsListing/fetchMorePosts',
  async (args, thunkAPI) => {
    const {after} = thunkAPI.getState().postsListing;
    const response = await subredditListing({after});
    return {posts: response.data.children, after: response.data.after};
  },
);

export const postsListingSlice = createSlice({
  name: 'postsListing',
  initialState: {
    loading: false,
    loadingMore: false,
    posts: [],
    after: '',
    error: '',
  },
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
      });
  },
});

// export const {clearError} = postsListingSlice.actions;

export default postsListingSlice.reducer;