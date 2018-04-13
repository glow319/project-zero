import React, {Component} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Styles from '../../../constants/Styles.js'
import PropTypes from 'prop-types';
import NewsFeedItemHeader from './NewsFeedItemHeader';
import NewsFeedItemFooter from './NewsFeedItemFooter';
import {connect} from 'react-redux';
import {mapDispatchToNewsFeedItemProps} from './mapDispatchToNewsFeedItemProps';

class FlatListItem extends Component {
  render() {
    const {index, item, onImageClick} = this.props;
    return (
    <View style={Styles.listItemContainer}>
      <NewsFeedItemHeader item={item} index={index}/>
      <TouchableOpacity onPress={onImageClick}>
        <Image
        source={{uri: item.imageUrl}}
        style={Styles.imageFeed}
        />
      </TouchableOpacity>
      <NewsFeedItemFooter item={item} index={index}/>
    </View>
    );
  }
}

export default connect(null, mapDispatchToNewsFeedItemProps)(FlatListItem);

FlatListItem.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object,
  onImageClick: PropTypes.func
};