import {useCallback, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../../redux/store';
import {fetchMorePosts, fetchPosts} from '../../../../redux/postsListingSlice';

function usePosts() {
  const {loading, loadingMore, posts} = useAppSelector(
    state => state.postsListing,
  );
  const dispatch = useAppDispatch();
  const loadPosts = useCallback(() => {
    if (!loading) {
      // @ts-ignore
      dispatch(fetchPosts());
    }
  }, [loading, dispatch]);
  const loadMorePosts = useCallback(() => {
    if (!loading && !loadingMore && posts.length) {
      // @ts-ignore
      dispatch(fetchMorePosts());
    }
  }, [loading, loadingMore, posts.length, dispatch]);
  useEffect(() => {
    loadPosts();
  }, []);
  return {
    loading,
    loadingMore,
    posts,
    loadPosts,
    loadMorePosts,
  };
}

export default usePosts;
