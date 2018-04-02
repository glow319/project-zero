import React, { Component } from 'react';
import { Platform, FlatList, StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import flatListData from './data/FlatListData.js';
import {Ionicons}  from '@expo/vector-icons';
import Colors from '../constants/Colors.js';
import {Rating} from 'react-native-elements';
import Styles from '../constants/Styles.js'

class FlatListItem extends Component {
    render (){
      return (
        <View style= {Styles.listItemContainer}>
          <View style={Styles.photoHeader}>
            <View style= {Styles.mealTitleContainer}>
              <TouchableOpacity>
                <Text style={Styles.mealName}>{this.props.item.mealName}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={Styles.restaurantInfo}>
                  {this.props.item.restaurantName}, {this.props.item.city}, {this.props.item.distance}
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
                startingValue = {this.props.item.rating}
                style={{ paddingVertical: 10 }}/>
              </TouchableOpacity>
            </View>
          </View>

          <Image 
              source={{uri: this.props.item.imageUrl}}
              style={Styles.imageFeed}
          />
  
          <TouchableOpacity> 
            <View style={Styles.photoFooter}>
                <Ionicons name='ios-heart' size={18} color='black'/>
                <View style={Styles.likeTextContainer}>
                  <Text style={Styles.likeText}>{this.props.item.likes} Likes</Text>
                </View>
            </View>
          </TouchableOpacity>        
        </View>
      );
    }
  }

export default FlatListItem;