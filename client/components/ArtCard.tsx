import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function ArtCard() {
  return (
    <View style={styles.container}>
      <Text>ArtCard</Text>
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
