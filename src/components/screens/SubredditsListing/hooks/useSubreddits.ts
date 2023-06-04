import {useAppSelector} from '../../../../redux/store';

function useSubreddits() {
  const {loading, subreddits} = useAppSelector(
    state => state.subredditsListing,
  );
  // TODO: load favourite subreddits from async storage
  // TODO: manage (add/delete/sort) favourite subreddits
  return {
    loading,
    subreddits,
  };
}

export default useSubreddits;
