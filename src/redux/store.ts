import {configureStore} from '@reduxjs/toolkit';
import postsListingReducer from './postsListingSlice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const store = configureStore({
  reducer: {
    postsListing: postsListingReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
