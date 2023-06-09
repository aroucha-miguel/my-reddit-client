import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import PostItem from './PostItem';
import EmptyContent from '../../common/EmptyContent';
import ItemSeparator from '../../common/ItemSeparator';
import LoadingMorePosts from '../../common/LoadingMorePosts';
import usePosts from './hooks/usePosts';
import useSubredditName from './hooks/useSubredditName';
import usePostsSort from './hooks/usePostsSort';

function PostsListingScreen(): JSX.Element {
  useSubredditName();
  const {posts, loading, loadingMore, loadPosts, loadMorePosts} = usePosts();
  usePostsSort();
  return (
    <SafeAreaView style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PostsListingScreen;
