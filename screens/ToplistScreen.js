import React from 'react';
import { View } from 'react-native';
import { Rating } from 'react-native-elements';
import Styles from '../constants/Styles.js'
import Toplist from '../components/Toplist.js'


export default class ToplistScreen extends React.Component {
  static navigationOptions = {
    title: 'toplist',
  };

  render() {
    return (
      <View style={Styles.container}>
        <Toplist/>
      </View>
    );
  }
}