import * as React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ArtCard from '../components/ArtCard';
import { getAllArt } from '../services/gallery';
import { ArtPiece } from '../../server/src/gallery/art-piece.interface';
import LottieAnimation from '../animations/LottieAnimation';

export default function GalleryScreen(): JSX.Element {
  const [art, setArt] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      getAllArt().then((fetchedArt) => {
        setArt(fetchedArt);
      });
    }, 3500);
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
  } else return <LottieAnimation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0c2952',
  },
  flatlist: {
    flex: 1,
    margin: 5,
  },
});
