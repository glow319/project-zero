import React from 'react';
import {View} from 'react-native';
import NewsFeed from '../components/NewsFeed/NewsFeed.js';
import Styles from '../constants/Styles.js';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'foodrate',
  };

  render() {
    return (
      <View style={Styles.container}>
        <NewsFeed/>
      </View>
    );
  }
}
