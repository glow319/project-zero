import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Styles from '../constants/Styles.js';
import GridView from 'react-native-super-grid';

export default class Toplist extends Component {
    render() {
      const items = [
        { name: 'BURGER', code: '#1abc9c' }, { name: 'PIZZA', code: '#2ecc71' },
        { name: 'PASTA', code: '#3498db' }, { name: 'BREAKFAST', code: '#9b59b6' },
        { name: 'BRUNCH', code: '#34495e' }, { name: 'SCHNITZEL', code: '#16a085' },
        ];
  
      return (
        <GridView
          itemDimension={130}
          items={items}
          style={Styles.gridView}
          renderItem={item => (
            <TouchableOpacity>
                <View style={[Styles.itemContainer, { backgroundColor: item.code }]}>
                    <Text style={Styles.itemName}>{item.name}</Text>
                </View>
            </TouchableOpacity>
          )}
        />
      );
    }
  }
  