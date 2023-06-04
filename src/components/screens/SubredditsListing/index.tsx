import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import SubredditItem from './SubredditItem';
import ItemSeparator from '../../common/ItemSeparator';
import EmptyContent from '../../common/EmptyContent';
import useSubreddits from './hooks/useSubreddits';

function SubredditsListingScreen(): JSX.Element {
  const {subreddits, loading} = useSubreddits();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={subreddits}
        refreshing={loading}
        keyExtractor={subreddit => subreddit}
        renderItem={({item}) => <SubredditItem subreddit={item} />}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={EmptyContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SubredditsListingScreen;
