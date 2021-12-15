import React, {Component} from 'react'
import {View, Image, Text} from 'react-native';
import styles from './style';

const GoPayFeature = props => {
  return (
    <View style={styles.titleGoPay}>
      <Image source={props.img} />
      <Text style={styles.textGoPay}>{props.title}</Text>
    </View>
  );
};

export default GoPayFeature;
