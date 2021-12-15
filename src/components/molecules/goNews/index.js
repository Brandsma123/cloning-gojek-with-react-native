import styles from './style';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

const GoNews = props => {
  return (
    <View style={styles.sectionNews}>
      <View style={styles.viewSection}>
        <Image
          source={require('../../../assets/dumy/sepak-bola.jpg')}
          style={styles.newsImage}
        />
        <View style={styles.imageSection1} />
        <View style={styles.newsImage1}>
          <Image
            source={require('../../../assets/logo/white.png')}
            style={styles.newsImage2}
          />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.titleNews}>GO-NEWS</Text>
        <Text style={styles.textNews}>Dimas save the pinalty from Malasya</Text>
        <TouchableOpacity style={styles.buttonSection}>
          <Text style={styles.textButtonSection}>READ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GoNews;
