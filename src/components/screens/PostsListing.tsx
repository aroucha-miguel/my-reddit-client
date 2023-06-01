import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import listPosts from '../../services/reddit/subredditListing';
import PostItem from '../common/PostItem';
import EmptyContent from '../common/EmptyContent';
import ItemSeparator from '../common/ItemSeparator';

function PostsListing(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const loadPosts = useCallback(async () => {
    if (!loading) {
      try {
        const data = await listPosts();
        // console.log(data);
        setPosts(data.data.children);
      } catch (error) {
        // TODO: handle error
      }
      setLoading(false);
    }
  }, [loading]);
  useEffect(() => {
    loadPosts();
  }, [loadPosts]);
  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        refreshing={loading}
        onRefresh={loadPosts}
        keyExtractor={({data}) => data.id}
        renderItem={({item: {data}}) => <PostItem post={data} />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        ListEmptyComponent={() => <EmptyContent />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default PostsListing;
