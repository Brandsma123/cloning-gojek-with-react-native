import React, { Component } from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-community/async-storage';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { formatCurrency } from '../../../../../utils/utilization';
class CardBafPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      point: null,
      userToken: '',
      isLoading: true,
      isBtnDisable: false,
    };
  }

  componentDidMount = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.setState({ userToken: userToken });
    if (this.props.route.name === 'Home') {
      if (userToken) this.props.getBafPoint(userToken);
      else this.setState({ isLoading: false });
    }
  };

  componentDidUpdate = async (prevProps) => {
    const { dataCard } = this.props;

    if (dataCard !== null && prevProps.dataCard !== dataCard) {
      if (dataCard.totalClaimPoint === '') {
        this.setState({ isBtnDisable: true });
      }
    }
  };

  handlePoint = (userData, route, point) => {
    if (route.name === 'BafPoint')
      return formatCurrency(this.props.dataCard.totalPoint);
    if (userData) {
      if (userData.Usergroupid === '2') {
        if (userData.Pointgroupid === '1') return formatCurrency(point);
      }
    }
    return '-';
  };

  handleButton = (userData, navigation) => {
    if (userData) {
      if (userData.Usergroupid === '2') {
        if (userData.Pointgroupid === '1')
          return navigation.navigate('BafPoint');
        else return navigation.navigate('BafPointTermCondition');
      } else return navigation.navigate('BafPointInputNIK', 'BafPoint');
    } else return navigation.navigate('Register');
  };

  handleLoading = () => {
    if (this.props.route.name === 'Home') return !this.state.isLoading;
    return !this.props.isLoading;
  };

  render() {
    const { userData, route, dataCard } = this.props;
    const { point, isBtnDisable } = this.state;
    return (
      <View style={style.card}>
        <ShimmerPlaceholder
          LinearGradient={LinearGradient}
          style={style.shimmerLoaderStyle}
          visible={this.handleLoading()}>
          <ImageBackground
            style={style.cardContainer}
            resizeMode={'cover'}
            source={require('../../../../../../assets/img/bafPoint/bafpointcard.png')}>
            <View style={style.content}>
              <View style={style.grid1}>
                <Text style={style.text}>BAF Points</Text>
                <Text style={style.textPoint}>
                  {this.handlePoint(userData, route, point)}
                </Text>
                <Text style={style.textWarning}>{dataCard.expMessage}</Text>
              </View>
              <View style={style.grid2}>
                <View style={style.warningIconAndPoint}>
                  {isBtnDisable ? null : (
                    <>
                      <Image
                        source={require('../../../../../../assets/img/bafPoint/warning1.png')}
                        style={style.warningIcon}
                      />
                      <Text style={style.textTotalClaimPoint}>{dataCard.totalClaimPoint}</Text>
                    </>
                  )}
                </View>
                {!isBtnDisable ? (
                  <Text style={style.textWarningEnableBtn}>
                    Jangan tunggu sampai hangus !
                  </Text>
                ) : (
                  <Text style={style.textWarningDisableBtn}>
                    Belum ada Points yang dapat di klaim
                  </Text>
                )}
                <TouchableOpacity
                  disabled={isBtnDisable}
                  style={style.btnClaim(isBtnDisable)}
                  onPress={() =>
                    !isBtnDisable
                      ? dataCard.claimBafPoint(this.state.userToken)
                      : null
                  }>
                  <Text style={style.textWarning}>Ambil Sekarang</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </ShimmerPlaceholder>
      </View>
    );
  }
}

export default CardBafPoint;
