import * as React from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet, View } from 'react-native';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');
const halfWidth = win.width / 2;

export default function LottieAnimation(): JSX.Element {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('./brush-loader.json')}
        style={styles.lottie}
        autoPlay
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c2952',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: halfWidth,
    height: halfWidth,
  },
});
