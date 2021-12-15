import styles from './style';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';

const GoBanner = () => {
  return (
    <View style={styles.viewFood}>
      <View style={styles.relativeFood}>
        <Image
          source={require('../../../assets/dumy/food-banner.jpg')}
          style={styles.newsImage}
        />
        <View style={styles.imageSection1} />
        <View style={styles.newsImage1}>
          <Image
            source={require('../../../assets/logo/white.png')}
            style={styles.newsImage2}
          />
        </View>
        <View style={styles.bannerFood}>
          <View>
            <Text style={styles.textBanner1}>Free GO-FOOD voucher</Text>
            <Text style={styles.textBanner2}>quick, before they run out!</Text>
          </View>
          <View style={styles.bannerView}>
            <TouchableOpacity style={styles.buttonSection}>
              <Text style={styles.textButtonSection}>GET VOUCHER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.niewViewFood1}></View>
    </View>
  );
};

export default GoBanner;
