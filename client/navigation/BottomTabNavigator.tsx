/* eslint-disable react/display-name */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../types';

import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import GalleryScreen from '../screens/GalleryScreen';
import HomeScreen from '../screens/HomeScreen';
import { StyleSheet } from 'react-native';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator(): JSX.Element {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: styles.tabBar,
        activeTintColor: '#fff',
        labelStyle: { fontSize: 13 },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Entypo name="home" size={24} color="#fde494" />,
        }}
      />
      <BottomTab.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="image-frame"
              size={24}
              color="#fde494"
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#09203f',
  },
});
