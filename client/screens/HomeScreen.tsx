import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function HomeScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Welcome-Light.png')}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0c2952',
  },
});
