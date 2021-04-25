import * as React from 'react';
import { Text, StyleSheet, View, Image, ImageBackground } from 'react-native';
import { ArtPiece } from '../../server/src/gallery/art-piece.interface';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const win = Dimensions.get('window');

export default function ArtCard(props: { art: ArtPiece }) {
  const { art } = props;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{ uri: art.imageUrl }}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['transparent', '#000']}
          start={[0.5, 0.1]}
          style={styles.linearGradient}
        >
          <Text style={styles.title} numberOfLines={2}>
            {art.title}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexBasis: '50%',
    alignItems: 'center',
    marginVertical: 20,
    shadowColor: '#071930',
    shadowRadius: 5,
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
  },
  image: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 20,
    height: win.height / 3.5,
    width: win.width / 2.2,
  },
  title: {
    textAlign: 'center',
    paddingVertical: 5,
    fontFamily: 'playfair',
    fontSize: 18,
    color: '#fff',
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 1.0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
