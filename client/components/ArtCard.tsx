import * as React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { ArtPiece } from '../../server/src/gallery/art-piece.interface';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');

export default function ArtCard(props: { art: ArtPiece }) {
  const { art } = props;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: art.imageUrl }}
        resizeMode="contain"
      />
      <Text style={styles.title}>{art.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexBasis: '45%',
    alignItems: 'center',
    margin: 5,
    marginVertical: 20,
    padding: 10,
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
    padding: 5,
  },
  image: {
    height: 200,
    width: win.width / 2.4,
  },
  linearGradient: {
    height: 200,
    width: win.width / 2.4,
    opacity: 0.8,
  },
});
