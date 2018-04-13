import React, { Component } from 'react';
import {FlatList, View} from 'react-native';
import flatListData from './data/FlatListData.js';
import FlatListItem from './FlatListItem.js';
import Styles from '../constants/Styles.js';


export default class NewsFeed extends Component {
  render () {
    return (
      <View style={Styles.newsFeedContainer}>
        <FlatList
          data={flatListData}
          renderItem = {({item, index}) => <FlatListItem item={item} index={index}/>}
        />
      </View>
    )
  }
}