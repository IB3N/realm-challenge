import * as React from 'react';
import { Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ArtCard from '../components/ArtCard';
import { getAllArt } from '../services/gallery';
import { ArtPiece } from '../../server/src/gallery/art-piece.interface';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function GalleryScreen() {
  const [art, setArt] = React.useState([]);

  React.useEffect(() => {
    getAllArt().then((fetchedArt) => {
      setArt(fetchedArt);
    });
  }, []);

  if (art.length) {
    return (
      <SafeAreaView style={styles.container}>
        {art.length && (
          <FlatList
            data={art}
            renderItem={({ item }) => <ArtCard art={item} />}
            keyExtractor={(item: ArtPiece) => item.imageUrl}
            numColumns={2}
            horizontal={false}
            style={styles.flatlist}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        )}
      </SafeAreaView>
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
  flatlist: {
    flex: 1,
    margin: 5,
  },
});
