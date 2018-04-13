import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import newsFeedData from '../data/newsFeedData.js';
import NewsFeedItem from './NewsFeedItem.js';
import Styles from '../../constants/Styles.js';


export default class NewsFeed extends Component {
  render () {
    return (
      <View style={Styles.newsFeedContainer}>
        <FlatList
          data={newsFeedData}
          renderItem = {({item, index}) => <NewsFeedItem item={item} index={index}/>}
        />
      </View>
    )
  }
}