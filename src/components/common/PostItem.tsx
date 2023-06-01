import React, {PropsWithChildren} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
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
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <PostThumbnail postThumbnail={post.thumbnail} />
      </View>
      <View style={styles.rightContainer}>
        <Text>{post?.title}</Text>
        <Text style={styles.authorText}>u/{post?.author}</Text>
        <View style={styles.dataContainer}>
          <Text>⇧{post?.score}</Text>
          <Text>|</Text>
          <Text>{post?.num_comments} comments</Text>
          <Text>|</Text>
          <Text>{post?.created}</Text>
        </View>
      </View>
    </View>
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
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default PostItem;
