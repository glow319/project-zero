import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Rating} from 'react-native-elements';
import Styles from '../../constants/Styles.js'
import PropTypes from 'prop-types';

class NewsFeedItemHeader extends Component {
  render() {
    const {item} = this.props;

    return (
    <View style={Styles.photoHeader}>
      <View style={Styles.mealTitleContainer}>
        <TouchableOpacity>
          <Text style={Styles.mealName}>{item.mealName}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Styles.restaurantInfo}>
            {item.restaurantName}, {item.city}, {item.distance}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.ratingContainer}>
        <TouchableOpacity>
          <Rating
          type="star"
          imageSize={20}
          ratingColor='#607D8B'
          readonly
          startingValue={item.rating}
          style={{paddingVertical: 10}}/>
        </TouchableOpacity>
      </View>
    </View>
    );
  }
}

export default NewsFeedItemHeader;

NewsFeedItemHeader.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object
};