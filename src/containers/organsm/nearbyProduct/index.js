import styles from './style';
import {View, Text, Image, ScrollView} from 'react-native';
import ScrollableNearByFood from '../../../components/molecules/scrolableNearByFood';
import React, {Component} from 'react';

const NearBy = () => {
  return (
    <View>
      <View style={styles.internalImage1}>
        <Image
          source={require('../../../assets/logo/gojek.png')}
          style={styles.newsImage2}
        />
      </View>
      <View style={styles.textNearBy}>
        <Text style={styles.nearBy}>Nearby Restaurant</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <ScrollView horizontal={true} style={styles.nearByFood}>
        <ScrollableNearByFood
          title="Sederhana Minang"
          img={require('../../../assets/dumy/go-food-kfc.jpg')}
        />
        <ScrollableNearByFood
          title="Orins"
          img={require('../../../assets/dumy/go-food-orins.jpg')}
        />
        <ScrollableNearByFood
          title="Pak Bos"
          img={require('../../../assets/dumy/go-food-pak-boss.jpg')}
        />
        <ScrollableNearByFood
          title="Banka"
          img={require('../../../assets/dumy/go-food-banka.jpg')}
        />
        <ScrollableNearByFood
          title="Sederhana gm"
          img={require('../../../assets/dumy/go-food-gm.jpg')}
        />
      </ScrollView>
      <View style={styles.niewViewFood1}></View>
    </View>
  );
};

export default NearBy;
