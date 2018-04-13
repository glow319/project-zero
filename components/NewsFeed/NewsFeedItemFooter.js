import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Styles from '../../constants/Styles.js'
import PropTypes from 'prop-types';

class NewsFeedItemFooter extends Component {
  render() {
    const {item} = this.props;

    return (
    <TouchableOpacity>
      <View style={Styles.photoFooter}>
        <Ionicons name='ios-heart' size={18} color='black'/>
        <View style={Styles.likeTextContainer}>
          <Text style={Styles.likeText}>{item.likes} Likes</Text>
        </View>
      </View>
    </TouchableOpacity>
    );
  }
}

export default NewsFeedItemFooter;

NewsFeedItemFooter.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object
};