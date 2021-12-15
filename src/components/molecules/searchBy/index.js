/* eslint-disable react/react-in-jsx-scope */
import styles from './style';
import {View, Image, Text, TextInput} from 'react-native';
import React, {Component} from 'react'

const SearchFuture = () => {
  return (
    <View style={styles.containerInput}>
      <View style={styles.viewInput}>
        <TextInput
          style={styles.styleInput}
          placeholder="What do you want to eat?"
        />
        <Image
          source={require('../../../assets/icon/search.png')}
          style={styles.imageInput}
        />
      </View>
      <View style={styles.imageIcon}>
        <Image source={require('../../../assets/icon/promo.png')} />
      </View>
    </View>
  );
};

export default SearchFuture;
