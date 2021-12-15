import React, {Component} from 'react';
import {View} from 'react-native';
import MainFuture from '../../../components/molecules/mainFeature';
import styles from './style';

class HomeMainFuture extends Component {
  render() {
    return (
      <View style={styles.mainFutureView}>
        <View style={styles.capsulFeature}>
          <MainFuture
            title="GO-RIDE"
            img={require('../../../assets/icon/go-ride.png')}
          />
          <MainFuture
            title="GO-CAR"
            img={require('../../../assets/icon/go-car.png')}
          />
          <MainFuture
            title="GO-BLUEBIRD"
            img={require('../../../assets/icon/go-bluebird.png')}
          />
          <MainFuture
            title="GO-SEND"
            img={require('../../../assets/icon/go-send.png')}
          />
        </View>
        <View style={styles.capsulFeature1}>
          <MainFuture
            title="GO-DEALS"
            img={require('../../../assets/icon/go-deals.png')}
          />
          <MainFuture
            title="GO-PULSA"
            img={require('../../../assets/icon/go-pulsa.png')}
          />
          <MainFuture
            title="GO-FOOD"
            img={require('../../../assets/icon/go-food.png')}
          />
          <MainFuture
            title="MORE"
            img={require('../../../assets/icon/more.png')}
          />
        </View>
      </View>
    );
  }
}

export default HomeMainFuture;
