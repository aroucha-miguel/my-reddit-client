import React, {PropsWithChildren, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useAppStackNavigation} from '../../../../navigation/AppStack';
import {updatePostsSubredditAndSort} from '../../../../redux/postsListingSlice';
import {useAppDispatch} from '../../../../redux/store';
import sortsConst from '../../../../utils/sortsConst';

type SubredditItemProps = PropsWithChildren<{
  subreddit: string;
}>;

function SubredditItem({subreddit}: SubredditItemProps): JSX.Element {
  const {navigate} = useAppStackNavigation();
  const dispatch = useAppDispatch();
  const selectSubreddit = useCallback(() => {
    dispatch(updatePostsSubredditAndSort({subreddit, sort: sortsConst.hot}));
    navigate('Home');
  }, [subreddit, dispatch, navigate]);
  return (
    <TouchableOpacity style={styles.container} onPress={selectSubreddit}>
      <Text>{subreddit}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default SubredditItem;
