import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function SpoilerThumbnail(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Spoiler</Text>
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

export default SpoilerThumbnail;
