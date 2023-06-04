import React, {useLayoutEffect} from 'react';
import {useAppSelector} from '../../../../redux/store';
import {useAppStackNavigation} from '../../../../navigation/AppStack';
import {Text} from 'react-native';

function useSubredditName() {
  const navigation = useAppStackNavigation();
  const {subreddit} = useAppSelector(state => state.postsListing);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: subreddit,
      headerRight: () => (
        <Text onPress={() => navigation.navigate('Subreddits')}>
          Subreddits
        </Text>
      ),
    });
  }, [subreddit, navigation]);
}

export default useSubredditName;
