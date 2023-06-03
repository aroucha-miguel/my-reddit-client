import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function EmptyContent(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>No data ):</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 8,
  },
});

export default EmptyContent;
