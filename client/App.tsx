import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import Navigation from './navigation';

export default function App(): JSX.Element {
  let [_] = useFonts({
    source: require('./assets/SourceSansPro-SemiBold.ttf'),
    playfair: require('./assets/PlayfairDisplay-Medium.ttf'),
  });

  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
