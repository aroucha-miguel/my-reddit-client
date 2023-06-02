import React, {useCallback, useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {fetchPosts, fetchMorePosts} from '../../../redux/postsListingSlice';
import PostItem from './PostItem';
import EmptyContent from '../../common/EmptyContent';
import ItemSeparator from '../../common/ItemSeparator';
import LoadingMorePosts from '../../common/LoadingMorePosts';
import {useAppDispatch, useAppSelector} from '../../../redux/store';

function PostsListingScreen(): JSX.Element {
  const {loading, loadingMore, posts} = useAppSelector(
    state => state.postsListing,
  );
  const dispatch = useAppDispatch();
  const loadPosts = useCallback(async () => {
    if (!loading) {
      dispatch(fetchPosts());
    }
  }, [loading, dispatch]);
  const loadMorePosts = useCallback(async () => {
    if (!loading && !loadingMore) {
      // @ts-ignore
      dispatch(fetchMorePosts());
    }
  }, [loading, loadingMore, dispatch]);
  useEffect(() => {
    loadPosts();
  }, []);
  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        refreshing={loading}
        onRefresh={loadPosts}
        onEndReached={loadMorePosts}
        onEndReachedThreshold={0.2}
        keyExtractor={({data}) => data.id}
        renderItem={({item: {data}}) => <PostItem post={data} />}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={EmptyContent}
        ListFooterComponent={LoadingMorePosts({isLoadingMore: loadingMore})}
      />
    </SafeAreaView>
  );
}

export default PostsListingScreen;
