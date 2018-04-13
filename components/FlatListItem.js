import React, {Component} from 'react';
import {Image, View} from 'react-native';
import Styles from '../constants/Styles.js'
import PropTypes from 'prop-types';
import NewsFeedItemHeader from './NewsFeed/NewsFeedItemHeader';
import NewsFeedItemFooter from './NewsFeed/NewsFeedItemFooter';

class FlatListItem extends Component {
    render (){
      const {index, item} = this.props;

      return (
        <View style= {Styles.listItemContainer}>
          <NewsFeedItemHeader item={item} index={index}/>
          <Image
              source={{uri: item.imageUrl}}
              style={Styles.imageFeed}
          />
          <NewsFeedItemFooter item={item} index={index}/>
        </View>
      );
    }
  }

export default FlatListItem;

FlatListItem.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object
};