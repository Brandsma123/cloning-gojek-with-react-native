import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import GoPayFeature from '../../../components/molecules/gopayFeature';
import styles from './style';

class HomeGoPay extends Component {
  render() {
    return (
      <View style={styles.goPayCOntainer}>
        <View style={styles.goPay}>
          <Image source={require('../../../assets/icon/gopay.png')} />
          <Text style={styles.textGoPay}> Rp 50.000</Text>
        </View>
        <View style={styles.iconGopay}>
          <GoPayFeature
            img={require('../../../assets/icon/pay.png')}
            title="Pay"
          />
          <GoPayFeature
            img={require('../../../assets/icon/nearby.png')}
            title="Nearby"
          />
          <GoPayFeature
            img={require('../../../assets/icon/topup.png')}
            title="Top Up"
          />
          <GoPayFeature
            img={require('../../../assets/icon/more.png')}
            title="More"
          />
        </View>
      </View>
    );
  }
}

export default HomeGoPay;
