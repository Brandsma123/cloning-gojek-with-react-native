import { Container, Content, Accordion, Icon } from 'native-base';
import React, { Component } from 'react';
import { Platform, View, Text, BackHandler } from 'react-native';
import SubHeaderAndroid from '../../../../../components/android/subHeaderBlue';
import SubHeaderIos from '../../../../../components/ios/subHeaderBlue';
import data from '../../term.json';
import styles from '../../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getPointGroupIdBafPoint } from '../../../../../actions/bafPoint';
import { refreshToken } from '../../../../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import CustomAlertComponent from '../../../../../components/multiPlatform/customAlert/CustomAlertComponent';
import { handleInvalid } from '../../../../../utils/handleInvalid';
import {
  MESSAGE_TOKEN_EXP,
  MESSAGE_TOKEN_INVALID,
  dataInvalid,
  MESSAGE_SUCCESS_BAF_POINT_ACTIVATION,
  MESSAGE_FAILED_BAF_POINT_ACTIVATION,
} from '../../../../../utils/constant';
import {
  jsonParse,
  handleRefreshToken,
} from '../../../../../utils/utilization';
class BafPointTermCondition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenTitle: 'Syarat dan Ketentuan BAF Points',
      agree: 'Setuju',
      userToken: '',
    };
  }

  componentDidMount = async () => {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    this.setState({ alertShowed: false });
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const {
      getPointGroupIdResult,
      getPointGroupIdError,
      refreshTokenResult,
      refreshTokenError,
    } = this.props;

    if (
      getPointGroupIdResult &&
      prevProps.getPointGroupIdResult !== getPointGroupIdResult
    ) {
      const userData = JSON.parse(await AsyncStorage.getItem('userData'));
      await AsyncStorage.setItem(
        'userData',
        JSON.stringify({
          Usergroupid: userData.Usergroupid,
          Pointgroupid: getPointGroupIdResult.result.PointGroupID,
        }),
      );
      this.handleTriggerBtn(getPointGroupIdResult);
    }

    if (
      getPointGroupIdError &&
      prevProps.getPointGroupIdError !== getPointGroupIdError
    ) {
      const json = await jsonParse(getPointGroupIdError.message);
      if (json.response === 404) {
        this.handleTriggerBtn(json);
      } else {
        this.handleValidateToken(json);
      }
    }

    if (
      refreshTokenResult &&
      prevProps.refreshTokenResult !== refreshTokenResult
    ) {
      await handleRefreshToken(refreshTokenResult.Refreshtoken);
      this.setState({ userToken: refreshTokenResult.Refreshtoken });
    }

    if (
      refreshTokenError &&
      prevProps.refreshTokenError !== refreshTokenError
    ) {
      console.log(
        'Error Refresh Token Dokumen BAF ',
        refreshTokenError.message,
      );
    }
  };

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    const isFocused = this.props.navigation.isFocused();
    if (isFocused) {
      this.props.navigation.goBack();
      return true;
    }
  };

  _renderHeader(item, expanded) {
    return (
      <View style={styles.renderHeader(expanded)}>
        <View style={styles.wrapTextRenderHeader}>
          <Text style={styles.textRenderHeader}>{item.title}</Text>
        </View>

        {expanded ? (
          <Icon style={styles.iconExpanded} name="chevron-up" />
        ) : (
          <Icon style={styles.iconExpanded} name="chevron-down" />
        )}
      </View>
    );
  }

  _renderContent = (content) => {
    let number = 0;
    return content.content.map((item) => {
      number++;
      return (
        <View>
          <View style={styles.wrapContent}>
            <View style={styles.containerWrapContentNumber}>
              <View>
                <Text style={styles.wrapNumber}>
                  {number}
                  {'. '}
                </Text>
              </View>
              <View style={styles.containerItemContent}>
                <Text style={styles.itemContent}>{item}</Text>
              </View>
            </View>
          </View>
        </View>
      );
    });
  };

  wrapRenderContent = (content) => {
    return (
      <View style={styles.wrapRenderContent}>
        {this._renderContent(content)}
      </View>
    );
  };

  handleAgree = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    if (userToken) {
      this.setState({ userToken: userToken });
      this.props.getPointGroupIdBafPoint(this.state.userToken);
    }
  };

  handleValidateToken = (responseData) => {
    if (responseData) {
      if (responseData.message === MESSAGE_TOKEN_INVALID) {
        handleInvalid(this.setState.bind(this), dataInvalid);
      } else if (responseData.message === MESSAGE_TOKEN_EXP) {
        this.props.refreshToken(this.state.userToken);
      }
    }
  };

  handlePositiveButtonAlert = () => {
    if (this.state.alertFor === 'invalidToken') {
      this.props.navigation.navigate('Login');
      this.setState({ alertFor: null });
    } else if (
      this.state.alertFor === 'agreeUseBafPoint' ||
      'errorUseBafPoint'
    ) {
      this.props.navigation.push('Home');
      this.setState({ alertFor: null });
    }
    this.setState({ alertShowed: false, alertFor: false });
  };

  handleTriggerBtn = (pointGroup) => {
    if (pointGroup.message === MESSAGE_SUCCESS_BAF_POINT_ACTIVATION) {
      this.setState({
        alertShowed: true,
        alertFor: 'agreeUseBafPoint',
        alertMessage: pointGroup.message,
        alertTitle: 'Berhasil',
        alertType: 'success',
        alertDoneText: 'OK',
      });
    } else if (pointGroup.message === MESSAGE_FAILED_BAF_POINT_ACTIVATION) {
      this.setState({
        alertShowed: true,
        alertFor: 'errorUseBafPoint',
        alertMessage: pointGroup.message,
        alertTitle: 'Gagal',
        alertType: 'failed',
        alertDoneText: 'OK',
      });
    }
  };

  handleShowHideBtnAgree = () => {
    switch (this.props.route.params) {
      case 'Activation':
        return (
          <View style={styles.viewButtonAgree}>
            <TouchableOpacity
              style={styles.btnAgree}
              onPress={this.handleAgree}>
              <Text style={styles.fontStyleBtnAgree}>{this.state.agree}</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        null;
        break;
    }
  };

  showAlert = () => {
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

  render() {
    return (
      <Container>
        {Platform.OS === 'android' ? (
          <SubHeaderAndroid
            title={this.state.screenTitle}
            goBack={() =>
              this.props.route.params === 'justS&K'
                ? this.props.navigation.navigate('BafPoint')
                : this.props.navigation.navigate('Home')
            }
          />
        ) : (
          <SubHeaderIos
            title={this.state.screenTitle}
            goBack={() =>
              this.props.route.params === 'justS&K'
                ? this.props.navigation.navigate('BafPoint')
                : this.props.navigation.navigate('Home')
            }
          />
        )}
        <Content contentContainerStyle={styles.contentStyle}>
          <View style={styles.viewContentStyle}>
            <View style={styles.wrapTextHeader}>
              <Text style={styles.textHeader}>{data.head.desc}</Text>
            </View>
            <Accordion
              dataArray={data.paragraph}
              renderHeader={this._renderHeader}
              renderContent={this.wrapRenderContent}
              style={styles.accordionStyle}
              expandedIcon={'chevron-up'}
            />
          </View>
        </Content>
        {this.handleShowHideBtnAgree()}
        {this.showAlert()}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    getPointGroupIdResult: state.getPointGroupIdBafPoint.result,
    getPointGroupIdError: state.getPointGroupIdBafPoint.error,
    refreshTokenResult: state.refreshToken.result,
    refreshTokenError: state.refreshToken.error,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getPointGroupIdBafPoint,
      refreshToken,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BafPointTermCondition);
