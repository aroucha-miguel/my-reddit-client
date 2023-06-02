import React, {PropsWithChildren} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PostThumbnail from './PostThumbnail';

type PostItemProps = PropsWithChildren<{
  post: {
    thumbnail: string;
    title: string;
    author: string;
    score: number;
    num_comments: number;
    created: number;
  };
}>;

function PostItem({post}: PostItemProps): JSX.Element {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate('WebView')}>
      <View style={styles.leftContainer}>
        <PostThumbnail postThumbnail={post.thumbnail} />
      </View>
      <View style={styles.rightContainer}>
        <Text>{post?.title}</Text>
        <Text style={styles.authorText}>u/{post?.author}</Text>
        <View style={styles.dataContainer}>
          <Text>⇧ {post?.score}</Text>
          <Text>🗨 {post?.num_comments}</Text>
          <Text>⏲ {post?.created}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    width: Dimensions.get('window').width * 0.2,
  },
  rightContainer: {
    // remove top container padding so content doesn't overflow
    width: Dimensions.get('window').width * 0.8 - 8,
  },
  authorText: {
    fontWeight: '200',
    paddingTop: 2,
    paddingBottom: 2,
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default PostItem;
