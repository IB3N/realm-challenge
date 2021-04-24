import * as React from 'react';
import { Text, StyleSheet, View, FlatList, ListRenderItem } from 'react-native';
import ArtCard from '../components/ArtCard';
import { getAllArt } from '../services/gallery';
import { ArtPiece } from '../../server/src/gallery/art-piece.interface';

export default function GalleryScreen() {
  const [art, setArt] = React.useState([]);

  React.useCallback(async () => {
    const fetchedArt = await getAllArt();
    setArt(fetchedArt);
  }, []);

  if (art.length) {
    return (
      <View style={styles.container}>
        {art.length && (
          <FlatList
            data={art}
            renderItem={({ item }) => <ArtCard art={item} />}
            keyExtractor={(item: ArtPiece) => item.imageUrl}
            numColumns={2}
            horizontal={false}
          />
        )}
      </View>
    );
  } else {
    return <Text>Loading</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
