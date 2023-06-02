import React, {PropsWithChildren} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

type LoadingMorePostsProps = PropsWithChildren<{
  isLoadingMore: boolean;
}>;

function LoadingMorePosts({
  isLoadingMore,
}: LoadingMorePostsProps): JSX.Element | null {
  if (isLoadingMore) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" />
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#bbb',
  },
});

export default LoadingMorePosts;
