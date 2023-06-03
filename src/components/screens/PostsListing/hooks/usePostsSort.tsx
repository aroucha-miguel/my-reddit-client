import React, {useCallback, useLayoutEffect} from 'react';
import {Text} from 'react-native';
import {useActionSheet} from '@expo/react-native-action-sheet';
import {useAppDispatch, useAppSelector} from '../../../../redux/store';
import {useAppStackNavigation} from '../../../../navigation/AppStack';
import {updatePostsSort} from '../../../../redux/postsListingSlice';

function usePostsSort() {
  const {showActionSheetWithOptions} = useActionSheet();
  const navigation = useAppStackNavigation();
  const {sort} = useAppSelector(state => state.postsListing);
  const dispatch = useAppDispatch();
  const selectSort = useCallback(() => {
    const options = ['hot', 'top', 'new', 'controversial', 'cancel'];
    const cancelButtonIndex = options.length - 1;
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      selectedIndex => {
        switch (selectedIndex) {
          case 0:
            dispatch(updatePostsSort('hot'));
            break;

          case 1:
            dispatch(updatePostsSort('top'));
            break;

          case 2:
            dispatch(updatePostsSort('new'));
            break;

          case 3:
            dispatch(updatePostsSort('controversial'));
            break;

          case cancelButtonIndex:
            console.log('cancel');
        }
      },
    );
  }, [showActionSheetWithOptions]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Text onPress={selectSort}>{sort}</Text>,
    });
  }, [sort, selectSort, navigation]);
}

export default usePostsSort;
