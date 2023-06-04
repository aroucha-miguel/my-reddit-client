import React, {PropsWithChildren, useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import EmptyThumbnail from './EmptyThumbnail';
import NSFWThumbnail from './NSFWThumbnail';
import SpoilerThumbnail from './SpoilerThumbnail';

type PostThumbnailProps = PropsWithChildren<{
  postThumbnail: string;
}>;

function PostThumbnail({postThumbnail}: PostThumbnailProps): JSX.Element {
  const [isError, setIsError] = useState(false);
  if (
    postThumbnail === 'self' ||
    postThumbnail === 'default' ||
    postThumbnail === 'image' ||
    isError
  ) {
    return <EmptyThumbnail />;
  }
  if (postThumbnail === 'nsfw') {
    return <NSFWThumbnail />;
  }
  if (postThumbnail === 'spoiler') {
    return <SpoilerThumbnail />;
  }
  if (postThumbnail) {
    return (
      <Image
        style={styles.image}
        source={{
          uri: postThumbnail,
        }}
        onError={() => setIsError(true)}
      />
    );
  }
  return <EmptyThumbnail />;
}

const styles = StyleSheet.create({
  image: {
    width: 64,
    height: 64,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#bbb',
  },
});

export default PostThumbnail;
