import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function EmptyThumbnail(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>NSFW</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    height: 64,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#bbb',
  },
});

export default EmptyThumbnail;
