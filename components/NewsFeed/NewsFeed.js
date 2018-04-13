import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList, View} from 'react-native';
import newsFeedData from '../data/newsFeedData.js';
import NewsFeedItem from './NewsFeedItem/NewsFeedItem.js';
import Styles from '../../constants/Styles.js';
import PropTypes from 'prop-types';
import {mapStateToNewsFeedProps} from './mapStateToNewsFeedProps'

class NewsFeed extends Component {
  render () {
    const {showDetails} = this.props;

    return (
      <View style={Styles.newsFeedContainer}>
        {showDetails ? <View/> :
        <FlatList
          data={newsFeedData}
          renderItem = {({item, index}) => <NewsFeedItem item={item} index={index}/>}
        />}
      </View>
    )
  }
}

NewsFeed.propTypes = {
  showDetails: PropTypes.bool
};

export default connect(mapStateToNewsFeedProps)(NewsFeed);