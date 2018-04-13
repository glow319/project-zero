import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {Rating} from 'react-native-elements';
import Styles from '../constants/Styles.js'
import PropTypes from 'prop-types';

class FlatListItem extends Component {
    render (){
      const {item} = this.props;

      return (
        <View style= {Styles.listItemContainer}>
          <View style={Styles.photoHeader}>
            <View style= {Styles.mealTitleContainer}>
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
                type = "star"
                imageSize = {20}
                ratingColor ='#607D8B'
                readonly
                startingValue = {item.rating}
                style={{ paddingVertical: 10 }}/>
              </TouchableOpacity>
            </View>
          </View>

          <Image 
              source={{uri: item.imageUrl}}
              style={Styles.imageFeed}
          />
  
          <TouchableOpacity> 
            <View style={Styles.photoFooter}>
                <Ionicons name='ios-heart' size={18} color='black'/>
                <View style={Styles.likeTextContainer}>
                  <Text style={Styles.likeText}>{item.likes} Likes</Text>
                </View>
            </View>
          </TouchableOpacity>        
        </View>
      );
    }
  }

export default FlatListItem;

FlatListItem.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object
};