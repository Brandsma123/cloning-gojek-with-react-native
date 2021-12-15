import styles from './style';
import {View, Image, Text} from 'react-native';
import React, {Component} from 'react'

const MainFuture = (props) => {
  return (
    <View style={styles.capsulTextFuture}>
      <View style={styles.mainFuture}>
        <Image source={props.img} />
      </View>
      <Text style={styles.textFuture}>{props.title}</Text>
    </View>
  );
};

export default MainFuture;
