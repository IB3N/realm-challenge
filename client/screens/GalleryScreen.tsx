import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ArtCard from '../components/ArtCard';

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <ArtCard />
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
