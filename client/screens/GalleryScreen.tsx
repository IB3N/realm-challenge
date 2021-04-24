import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello Gallery</Text>
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
