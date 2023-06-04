import React, {useCallback, useLayoutEffect} from 'react';
import {Text} from 'react-native';
import {useActionSheet} from '@expo/react-native-action-sheet';
import {useAppDispatch, useAppSelector} from '../../../../redux/store';
import {useAppStackNavigation} from '../../../../navigation/AppStack';
import {updatePostsSort} from '../../../../redux/postsListingSlice';
import sortsConst from '../../../../utils/sortsConst';

function usePostsSort() {
  const {showActionSheetWithOptions} = useActionSheet();
  const navigation = useAppStackNavigation();
  const {sort} = useAppSelector(state => state.postsListing);
  const dispatch = useAppDispatch();
  const selectSort = useCallback(() => {
    const options = Object.values(sortsConst);
    const cancelButtonIndex = options.length;
    showActionSheetWithOptions(
      {
        options: [...options, 'cancel'],
        cancelButtonIndex,
      },
      selectedIndex => {
        if (selectedIndex === 0 || selectedIndex) {
          if (selectedIndex < cancelButtonIndex) {
            if (sort !== options[selectedIndex]) {
              dispatch(updatePostsSort(options[selectedIndex]));
            }
          }
        }
      },
    );
  }, [sort, showActionSheetWithOptions, dispatch]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Text onPress={selectSort}>Sort: {sort}</Text>,
    });
  }, [sort, selectSort, navigation]);
}

export default usePostsSort;
