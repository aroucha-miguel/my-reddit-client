import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

function ItemSeparator(): JSX.Element {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    borderColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ItemSeparator;
