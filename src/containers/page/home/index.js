import React, {Component} from 'react';
import styles from './style';
import {View, ScrollView} from 'react-native';
import SearchFuture from '../../../components/molecules/searchBy';
import HomeGoPay from '../../organsm/homeGoPay';
import HomeMainFuture from '../../organsm/homeMainFuture';
import GoNews from '../../../components/molecules/goNews';
import GoInfo from '../../../components/molecules/goInfo';
import GoBanner from '../../../components/molecules/goBanner';
import NearBy from '../../organsm/nearbyProduct';
import NavBar from '../../organsm/navBar';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.view1}>
          {/* search by */}
          <SearchFuture />
          {/* gopay */}
          <HomeGoPay />
          {/* msin future */}
          <HomeMainFuture />
          <View style={styles.advertisement} />
          <GoNews onPress={() => this.props.navigation.navigate('NewsDetail')}/>
          <GoInfo />
          <GoBanner />
          <NearBy />
        </ScrollView>
        <NavBar />
      </View>
    );
  }
}

export default Home;
