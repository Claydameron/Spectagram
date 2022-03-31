import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeedScreen from '../screens/Feed';
import CreateScreen from '../screens/Create';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      barStyle={styles.tabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Create') {
            iconName = focused ? 'create' : 'create-outline';
          }
          return (
            <Ionicons
              name={iconName}
              size={RFValue(15)}
              color={color}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Create" component={CreateScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: '#17aaff',
    height: '7.5%',
    borderTopLeftRadius: RFValue(20),
    borderTopRightRadius: RFValue(20),
    overflow: 'hidden',
    position: 'absolute',
    marginLeft: RFValue(140),
    marginRight: RFValue(140)
  },
});

export default BottomTabNavigator;
