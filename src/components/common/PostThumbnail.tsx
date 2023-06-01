import React, {PropsWithChildren} from 'react';
import {StyleSheet, Image} from 'react-native';
import EmptyThumbnail from './EmptyThumbnail';
import NSFWThumbnail from './NSFWThumbnail';

type PostThumbnailProps = PropsWithChildren<{
  postThumbnail: string;
}>;

function PostThumbnail({postThumbnail}: PostThumbnailProps): JSX.Element {
  if (postThumbnail === 'self') {
    return <EmptyThumbnail />;
  }
  if (postThumbnail === 'nsfw') {
    return <NSFWThumbnail />;
  }
  return (
    <Image
      style={styles.image}
      source={{
        uri: postThumbnail,
      }}
    />
  );
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
