import { Container, Content, Form, Input, Item } from 'native-base';
import React, { Component } from 'react';
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import SubHeaderAndroid from '../../../../../components/android/subHeaderBlue';
import SubHeaderIos from '../../../../../components/ios/subHeaderBlue';
import { Field, reduxForm, reset } from 'redux-form';
import styles from './style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FormSubmitNikValidate } from '../../../../../validates/FormSubmitNikValidate';
import { getActiveAgreement, submitNik } from '../../../../../actions/home';
import AsyncStorage from '@react-native-community/async-storage';
import {
  handleRefreshToken,
  jsonParse,
  normalizeCurrency,
} from '../../../../../utils/utilization';
import { detailUser, refreshToken } from '../../../../../actions';
import CustomAlertComponent from '../../../../../components/multiPlatform/customAlert/CustomAlertComponent';
import {
  dataInvalid,
  MESSAGE_TOKEN_EXP,
  MESSAGE_TOKEN_INVALID,
} from '../../../../../utils/constant';
import { handleInvalid } from '../../../../../utils/handleInvalid';
import Spinner from 'react-native-loading-spinner-overlay';

export const renderField = ({
  input,
  type,
  placeholder,
  placeholderTextColor,
  editable,
  keyboardType,
  maxLength,
  secureTextEntry,
  meta: { touched, error },
}) => {
  var hasError = false;

  if (touched && error !== undefined) {
    hasError = true;
  }
  return (
    <View>
      <Item regular style={styles.item(hasError)}>
        <Input
          {...input}
          type={type}
          editable={editable}
          placeholder={placeholder}
          placeholderTextColor={hasError ? 'red' : placeholderTextColor}
          keyboardType={keyboardType}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry}
          style={styles.input}
        />
      </Item>
      {hasError ? <Text style={styles.errorDesc}>{error}</Text> : null}
    </View>
  );
};

class BafPointInputNIK extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenTitle: 'Masukkan NIK',
      alertShowed: false,
      alertFor: false,
      alertMessage: '',
      alertTitle: '',
      alertType: 'success',
      alertDoneText: '',
      userData: '',
      userToken: '',
      NIK: '',
    };
  }

  componentDidMount = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    if (userToken) {
      this.setState({ userToken: userToken });
    }
  };

  componentDidUpdate = async (prevProps) => {
    const {
      submitNikResult,
      submitNikError,
      refreshTokenError,
      refreshTokenResult,
      detailUser,
      detailUserResult,
      getActiveAgreement,
      getActiveAgreementResult,
    } = this.props;

    if (submitNikResult && prevProps.submitNikResult !== submitNikResult) {
      this.props.resetForm('formSubmitNik');
      const userToken = await AsyncStorage.getItem('userToken');
      await AsyncStorage.removeItem('userData');
      await AsyncStorage.setItem(
        'userData',
        JSON.stringify({
          Usergroupid: submitNikResult.UserGroupID,
        }),
      );

      this.setState({
        alertShowed: true,
        alertMessage: 'Anda berhasil submit NIK.',
        alertTitle: 'Berhasil',
        alertType: 'success',
        alertDoneText: 'OK',
        userData: {
          Usergroupid: submitNikResult.UserGroupID,
        },
      });

      detailUser({}, userToken);
      getActiveAgreement(userToken);
    }

    if (submitNikError && prevProps.submitNikError !== submitNikError) {
      const data = await jsonParse(submitNikError.message); //di sini ngeparse sekaligus ngecek apakah data kiriman error berupa json
      if (data) {
        this.validateRefreshToken(data);
      } else {
        this.setState({
          alertShowed: true,
          alertMessage: submitNikError.message,
          alertTitle: 'Gagal',
          alertType: 'error',
          alertDoneText: 'OK',
        });
      }
    }

    if (detailUserResult && prevProps.detailUserResult !== detailUserResult) {
      await AsyncStorage.setItem(
        'detailUser',
        JSON.stringify(detailUserResult),
      );
    }

    if (
      getActiveAgreementResult &&
      prevProps.getActiveAgreementResult !== getActiveAgreementResult
    ) {
      if (
        getActiveAgreementResult.AllData &&
        getActiveAgreementResult.AllData.length > 0
      ) {
        await AsyncStorage.setItem(
          'activeAgreement',
          JSON.stringify(getActiveAgreementResult.AllData),
        );
      }
    }

    if (
      refreshTokenError !== null &&
      prevProps.refreshTokenError !== refreshTokenError
    ) {
      console.log('Error Refresh Token home ', refreshTokenError.message);
    }

    if (
      refreshTokenResult !== null &&
      prevProps.refreshTokenResult !== refreshTokenResult
    ) {
      await handleRefreshToken(refreshTokenResult.Refreshtoken);
      this.setState({ userToken: refreshTokenResult.Refreshtoken });

      if (submitNikError) {
        this.props.submitNik(
          { NIK: this.state.NIK },
          refreshTokenResult.Refreshtoken,
        );
      }
    }
  };

  validateRefreshToken = async (data) => {
    const { refreshToken } = this.props;
    if (data) {
      if (data.message === MESSAGE_TOKEN_EXP) {
        refreshToken(this.state.userToken);
      } else if (data.message === MESSAGE_TOKEN_INVALID) {
        handleInvalid(this.setState.bind(this), dataInvalid);
      }
    }
  };

  onSubmit = async (data) => {
    this.setState({ NIK: data.NIK });
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.submitNik(data, userToken);
  };

  showAlert = () => {
    return (
      <CustomAlertComponent
        testIdPositiveButton="OK"
        testIdNegativeButton="Cancel"
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
        onPressNegativeButton={this.handleNegativeButtonAlert}
        negativeButtonText={this.state.alertCancelText}
        onPressPositiveButton={this.handlePositiveButtonAlert}
      />
    );
  };

  handlePositiveButtonAlert = () => {
    const { navigation, route } = this.props;
    this.setState({ alertShowed: false });
    if (route.params === 'BafPoint') {
      if (this.state.alertType === 'success')
        navigation.navigate('BafPointTermCondition');
    } else {
      if (this.state.alertType === 'success') navigation.push('Home');
    }
    if (this.state.alertFor === 'invalidToken') {
      this.props.navigation.navigate('Login');
      this.setState({ alertFor: null });
    }
  };

  render() {
    const {
      submitting,
      pristine,
      handleSubmit,
      navigation,
      route,
      submitNikLoading,
    } = this.props;
    return (
      <Container>
        {Platform.OS === 'android' ? (
          <SubHeaderAndroid
            title={this.state.screenTitle}
            goBack={() => navigation.goBack()}
          />
        ) : (
          <SubHeaderIos
            title={this.state.screenTitle}
            goBack={() => navigation.goBack()}
          />
        )}
        <Content contentContainerStyle={styles.content}>
          <Spinner
            visible={submitNikLoading}
            textContent={'Loading...'}
            textStyle={{ color: '#FFF' }}
          />
          <View style={styles.viewImage}>
            <Image
              style={styles.image}
              source={require('../../../../../../assets/img/InputNIK.png')}
            />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.text}>
              Masukkan NIK kamu untuk mendapatkan fasilitas di BAF Mobile
            </Text>
          </View>
          <View style={styles.viewForm}>
            <Form>
              <Field
                name="NIK"
                type="text"
                component={renderField}
                placeholder="Masukkan NIK kamu"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                maxLength={16}
                keyboardType="number-pad"
                editable={true}
                normalize={normalizeCurrency}
              />
              <TouchableOpacity
                style={styles.button(pristine)}
                onPress={handleSubmit(this.onSubmit)}
                disabled={submitting || pristine}>
                <Text style={styles.modalButtonText}>
                  {route.params === 'BafPoint' ? 'Selanjutnya' : 'OK'}
                </Text>
              </TouchableOpacity>
            </Form>
          </View>
        </Content>
        {this.showAlert()}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    submitNikResult: state.submitNik.result,
    submitNikLoading: state.submitNik.loading,
    submitNikError: state.submitNik.error,
    refreshTokenResult: state.refreshToken.result,
    refreshTokenError: state.refreshToken.error,
    detailUserResult: state.detailUser.result,
    detailUserError: state.detailUser.error,
    getActiveAgreementResult: state.getActiveAgreement.result,
    getActiveAgreementError: state.getActiveAgreement.error,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      submitNik,
      resetForm: (form) => dispatch(reset(form)),
      refreshToken,
      detailUser,
      getActiveAgreement,
    },
    dispatch,
  );
}

BafPointInputNIK = reduxForm({
  form: 'formSubmitNik',
  enableReinitialize: true,
  validate: FormSubmitNikValidate,
})(BafPointInputNIK);

export default connect(mapStateToProps, matchDispatchToProps)(BafPointInputNIK);
