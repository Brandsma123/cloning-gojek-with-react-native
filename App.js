import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import GoPayFeature from './src/components/molecules/gopayFeature';
import MainFuture from './src/components/molecules/mainFeature';
import SearchFuture from './src/components/molecules/searchBy';
import GoNews from './src/components/molecules/goNews';
import GoInfo from './src/components/molecules/goInfo';
import GoBanner from './src/components/molecules/goBanner';
import NearBy from './src/containers/organsm/nearbyProduct';
import NavbarIcon from './src/components/molecules/navbarIcon';
import NavBar from './src/containers/organsm/navBar';
import HomeMainFuture from './src/containers/organsm/homeMainFuture';
import HomeGoPay from './src/containers/organsm/homeGoPay';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.view1}>
          {/* search by */}
          <SearchFuture />
          {/* gopay */}
          <HomeGoPay/>
          {/* msin future */}
          <HomeMainFuture />
          <View style={styles.advertisement} />
          <GoNews />
          <GoInfo />
          <GoBanner />
          <NearBy />
        </ScrollView>
        <NavBar />
      </View>
    );
  }
}
