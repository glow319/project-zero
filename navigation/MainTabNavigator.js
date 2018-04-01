import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import ToplistScreen from '../screens/ToplistScreen';
import AddScreen from '../screens/AddScreen';
import FavoritScreen from '../screens/FavoritScreen';
import UserScreen from '../screens/UserScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Toplist: {
      screen: ToplistScreen,
    },
    Add: {
      screen: AddScreen,
     
    },
    Favorit: {
      screen: FavoritScreen,
    },
    User: {
      screen: UserScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-home${focused ? '' : '-outline'}`: 'md-home';
            break;
          case 'Toplist':
          iconName = Platform.OS === 'ios' ? `ios-trophy${focused ? '' : '-outline'}` : 'md-trophy';
            break;  
          case 'Add':
            iconName = Platform.OS === 'ios' ? `ios-add-circle${focused ? '' : '-outline'}` : 'md-add-circle';
            break;
          case 'Favorit':
            iconName = Platform.OS === 'ios' ? `ios-heart${focused ? '' : '-outline'}` : 'md-heart';
            break;
          case 'User':
            iconName =
              Platform.OS === 'ios' ? `ios-person${focused ? '' : '-outline'}` : 'md-person';
        }
        return (
          routeName === 'Add' ? 

          <Ionicons
            name={iconName}
            size={40}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
          :
          <Ionicons
            name={iconName}
            size={30}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
      
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: Colors.tabIconSelected,
      inactiveTintColor: Colors.tabIconDefault,
      showLabel: false,
    }
  }
);
