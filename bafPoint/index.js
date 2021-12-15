import { Container, Icon } from 'native-base';
import React, { Component } from 'react';
import {
  Text,
  View,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  BackHandler,
} from 'react-native';
import { getBafPointHistory, claimBafPoint } from '../../../actions/bafPoint';
import { refreshToken } from '../../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reset } from 'redux-form';
import SubHeaderAndroid from '../../../components/android/subHeaderBlue';
import SubHeaderIos from '../../../components/ios/subHeaderBlue';
import CardBafPoint from './components/cardBafPoint';
import styles from './styles';
import { handleInvalid } from '../../../utils/handleInvalid';
import {
  dataInvalid,
  MESSAGE_TOKEN_INVALID,
  MESSAGE_TOKEN_EXP,
} from '../../../utils/constant';
import AsyncStorage from '@react-native-community/async-storage';
import { jsonParse, handleRefreshToken } from '../../../utils/utilization';
import CustomAlertComponent from '../../../components/multiPlatform/customAlert/CustomAlertComponent';
import Spinner from 'react-native-loading-spinner-overlay';
class BafPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenTitle: 'BAF Points',
      historyTitle: 'Riwayat',
      termAndConditionTitle: 'Syarat & Ketentuan',
      addPoint: 'DEPOSIT',
      HistoryData: null,
      userToken: null,
      dataCard: '',
      isLoading: true,
    };
  }

  componentDidMount = async () => {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    this.setState({ alertShowed: false });
    await this.handleGetToken();
    if (this.state.userToken) {
      this.props.getBafPointHistory(this.state.userToken);
    }
  };

  componentDidUpdate = async (prevProps) => {
    const {
      getBafPointHistoryResult,
      getBafPointHistoryLoading,
      getBafPointHistoryError,
      refreshTokenResult,
      refreshTokenError,
      claimBafPoint,
      claimBafPointResult,
      getBafPointHistory,
    } = this.props;

    if (
      getBafPointHistoryResult &&
      prevProps.getBafPointHistoryResult !== getBafPointHistoryResult
    ) {
      const dataToProps = {
        expMessage: getBafPointHistoryResult.ExpMsg,
        totalPoint: getBafPointHistoryResult.TotalPoint,
        totalClaimPoint: getBafPointHistoryResult.TotalClaimPoint,
        claimBafPoint: claimBafPoint,
      };

      await this.setState({
        HistoryData: getBafPointHistoryResult.DetailPoint,
        dataCard: dataToProps,
        isLoading: getBafPointHistoryLoading,
      });
    }

    if (
      getBafPointHistoryError &&
      prevProps.getBafPointHistoryError !== getBafPointHistoryError
    ) {
      const dataToProps = {
        expMessage: '',
        totalPoint: '',
        totalClaimPoint: '',
        claimBafPoint: null,
      };

      await this.setState({
        dataCard: dataToProps,
        isLoading: getBafPointHistoryLoading,
      });

      const data = await jsonParse(getBafPointHistoryError.message);
      if (data) {
        this.handleValidateToken(data);
      } else {
        this.setState({ alertShowed: false });
      }
    }

    if (
      refreshTokenResult !== null &&
      prevProps.refreshTokenResult !== refreshTokenResult
    ) {
      await handleRefreshToken(refreshTokenResult.Refreshtoken);
      this.setState({ userToken: refreshTokenResult.Refreshtoken });
      getBafPointHistory(this.state.userToken);
    }

    if (
      refreshTokenError !== null &&
      prevProps.refreshTokenError !== refreshTokenError
    ) {
      handleInvalid(this.setState.bind(this), dataInvalid);
    }

    if (
      claimBafPointResult &&
      prevProps.claimBafPointResult !== claimBafPointResult
    ) {
      getBafPointHistory(this.state.userToken);
    }
  };

  handleGetToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.setState({ userToken: userToken });
  };

  renderHistoryComponent = () => {
    return (
      <View style={styles.historyContainerComponent}>
        <View style={styles.viewTextHistoryTitle}>
          <View style={styles.barTitle} />
          <Text style={styles.textHistoryTitle}>Riwayat Transaksi</Text>
        </View>
        <SafeAreaView style={styles.containerCard}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.state.isLoading
              ? this.renderHistoryLoading()
              : this.state.HistoryData === null
              ? this.renderHistoryIsNotExist()
              : this.state.HistoryData.map((detailData) => {
                  return (
                    <View style={[styles.cardHistory, styles.shadowIphone]}>
                      <View style={styles.viewDescPoint}>
                        <Text style={styles.fontDescPoint}>
                          {detailData.PointDesc.length > 20
                            ? detailData.PointDesc.substring(0, 20) + ' ...'
                            : detailData.PointDesc}
                        </Text>
                        {detailData.PointType === this.state.addPoint ? (
                          <Text
                            style={[
                              styles.fontDescPoint,
                              styles.fontValuePointIncrement,
                            ]}>
                            + {detailData.Point} POINTS
                          </Text>
                        ) : (
                          <Text
                            style={[
                              styles.fontDescPoint,
                              styles.fontValuePointDecrement,
                            ]}>
                            - {detailData.Point} POINTS
                          </Text>
                        )}
                      </View>
                      <Text style={[styles.fontDescPoint, styles.fontDatePoint]}>
                        {detailData.Date}
                      </Text>
                    </View>
                  );
                })}
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  };

  renderHistoryIsNotExist = () => {
    return (
      <View style={styles.containerHistoryIsNotExist}>
        <Image
          style={styles.imageHistoryIsNotExist}
          source={require('../../../../assets/img/bafPoint/iconHistoryNotExist.png')}
        />
        <Text style={styles.fontStyleHistoryNotExist}>Belum Ada Riwayat</Text>
      </View>
    );
  };

  renderHistoryLoading = () => {
    return (
      <View style={styles.containerHistoryIsNotExist}>
        <Text style={styles.loadingText}>Sedang Memuat Data</Text>
      </View>
    );
  };

  renderShowAlert = () => {
    return (
      <CustomAlertComponent
        displayAlert={this.state.alertShowed}
        displayAlertIcon={true}
        alertType={this.state.alertType}
        alertTitleText={this.state.alertTitle}
        alertMessageText={this.state.alertMessage}
        displayPositiveButton={true}
        positiveButtonText={this.state.alertDoneText}
        displayNegativeButton={
          this.state.alertType === 'confirm' ? true : false
        }
        negativeButtonText={this.state.alertCancelText}
        onPressPositiveButton={this.handlePositiveButtonAlert}
        onPressNegativeButton={this.handleNegativeButtonAlert}
      />
    );
  };

  handleValidateToken = (data) => {
    if (data.message === MESSAGE_TOKEN_INVALID) {
      handleInvalid(this.setState.bind(this), dataInvalid);
    } else if (data.message === MESSAGE_TOKEN_EXP) {
      this.props.refreshToken(this.state.userToken);
    }
  };

  handlePositiveButtonAlert = () => {
    if (this.state.alertFor === 'invalidToken') {
      this.props.navigation.navigate('Login');
      this.setState({ alertFor: null });
    }

    this.setState({ alertShowed: false });
  };

  handleBackButton = () => {
    if (this.props.navigation.isFocused()) this.props.navigation.goBack();
    return true;
  };


  render() {
    return (
      <Container>
        {Platform.OS === 'android' ? (
          <SubHeaderAndroid
            title={this.state.screenTitle}
            goBack={() => this.props.navigation.goBack()}
          />
        ) : (
          <SubHeaderIos
            title={this.state.screenTitle}
            goBack={() => this.props.navigation.goBack()}
          />
        )}

        <Spinner
          visible={this.props.claimBafPointLoading ? true : false}
          textContent={'Loading...'}
          textStyle={{ color: '#FFF' }}
        />

        <View style={styles.mainContainer}>
          <View style={styles.cardContainer}>
            <CardBafPoint
              route={this.props.route}
              dataCard={this.state.dataCard}
              isLoading={this.state.isLoading}
            />
          </View>
          <Container>
            <TouchableOpacity
              style={styles.btnTermAndCondition}
              onPress={() =>
                this.props.navigation.navigate(
                  'BafPointTermCondition',
                  'justS&K',
                )
              }>
              <Image
                style={styles.btnImageTermAndCondition}
                source={require('../../../../assets/img/bafPoint/exclamationBlue.png')}
              />
              <Text style={styles.textStyleTermAndCondition}>
                Syarat dan Ketentuan
              </Text>
              <Icon style={styles.iconTermAndCondition} name="chevron-up" />
            </TouchableOpacity>
            {this.renderHistoryComponent()}
          </Container>
        </View>
        {this.renderShowAlert()}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    getBafPointHistoryResult: state.getBafPointHistory.result,
    getBafPointHistoryLoading: state.getBafPointHistory.loading,
    getBafPointHistoryError: state.getBafPointHistory.error,
    refreshTokenResult: state.refreshToken.result,
    refreshTokenError: state.refreshToken.error,
    claimBafPointResult: state.claimBafPoint.result,
    claimBafPointError: state.claimBafPoint.error,
    claimBafPointLoading: state.claimBafPoint.loading,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getBafPointHistory,
      refreshToken,
      resetForm: (form) => dispatch(reset(form)),
      claimBafPoint,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(BafPoint);
