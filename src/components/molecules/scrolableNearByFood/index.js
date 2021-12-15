import styles from './style';
import {View, Image, Text} from 'react-native';
import React, {Component} from 'react';

const ScrollableNearByFood = (props) => {
  return (
    <View style={styles.moveFoodNearBy}>
      <View style={styles.imageFood}>
        <Image source={props.img} style={styles.imageNearBy} />
      </View>
      <Text style={styles.titleRestaurant}>{props.title}</Text>
    </View>
  );
};

export default ScrollableNearByFood;
