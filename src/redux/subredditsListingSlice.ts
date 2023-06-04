import {createSlice} from '@reduxjs/toolkit';

interface SubredditsListingState {
  loading: boolean;
  subreddits: string[];
}

const initialState: SubredditsListingState = {
  loading: false,
  subreddits: ['pics', 'ReactNative', 'Programming'],
};

export const subredditsListingSlice = createSlice({
  name: 'subredditsListing',
  initialState,
  reducers: {},
});

// export const {} = subredditsListingSlice.actions;

export default subredditsListingSlice.reducer;
