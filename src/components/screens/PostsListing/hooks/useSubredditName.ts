import {useLayoutEffect} from 'react';
import {useAppSelector} from '../../../../redux/store';
import {useAppStackNavigation} from '../../../../navigation/AppStack';

function useSubredditName() {
  const navigation = useAppStackNavigation();
  const {subreddit} = useAppSelector(state => state.postsListing);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: subreddit,
    });
  }, [subreddit, navigation]);
}

export default useSubredditName;
