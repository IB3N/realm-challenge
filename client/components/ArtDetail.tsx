import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function ArtDetail() {
  return (
    <View style={styles.container}>
      <Text>ArtDetail</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
