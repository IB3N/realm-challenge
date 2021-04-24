import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { ArtPiece } from '../../server/src/gallery/art-piece.interface';

export default function ArtCard(props: { art: ArtPiece }) {
  const { art } = props;
  return (
    <View style={styles.container}>
      <Text>{art.title}</Text>
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
