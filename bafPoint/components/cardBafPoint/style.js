import { Dimensions, Platform, StyleSheet } from 'react-native';
import { fonts } from '../../../../../utils/fonts';
import { BAF_COLOR_BLUE } from '../../../../../utils/constant';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  getScaleImageHeightIos,
  getScaleImageWidthIos,
  getScaleIos,
  RFValue,
} from '../../../../../utils/utilization';

export default StyleSheet.create({
  viewRenderField: {
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
  },

  textRenderField: {
    alignSelf: 'flex-start',
    marginLeft: '5.5%',
    marginBottom: Dimensions.get('window').width <= 360 ? '-8%' : '-6%',
    fontFamily: fonts.primary.normal,
    fontSize: Dimensions.get('window').width <= 360 ? 12 : 14,
  },

  itemRenderField: {
    width: '90%',
    height: 40,
    marginBottom: 10,
  },

  inputRenderField: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    paddingLeft: '5%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: BAF_COLOR_BLUE,
    borderRadius: 4,
  },

  card: {
    width: wp('100%'),
    height: hp('20%'),
  },

  cardContainer: {
    width: wp('100%'),
    maxHeight: hp('20%'),
    marginTop: 0,
  },

  shimmerLoaderStyle: {
    width: wp('100%'),
    height: hp('20%'),
    marginTop: 0,
  },

  content: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(15),
  },

  viewContent: {
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(20),
    color: '#FFF',
  },

  textTotalClaimPoint: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(20),
    color: '#FFF',
  },

  textPoint: {
    fontFamily: fonts.primary.bold,
    fontSize:
      Platform.OS === 'android'
        ? Dimensions.get('window').width <= 360
          ? 26
          : hp(4.7)
        : getScaleIos(32),
    color: '#FFF',
  },

  imageCoin: {
    width:
      Platform.OS === 'android'
        ? Dimensions.get('window').width <= 360
          ? 28
          : wp(8.8)
        : getScaleImageWidthIos(37),
    height:
      Platform.OS === 'android'
        ? Dimensions.get('window').width <= 360
          ? 28
          : wp(8.8)
        : getScaleImageHeightIos(37),
  },

  button: {
    backgroundColor: BAF_COLOR_BLUE,
    width:
      Platform.OS === 'android'
        ? Dimensions.get('window').width <= 360
          ? 62
          : wp(18.3)
        : getScaleImageWidthIos(75),
    height:
      Platform.OS === 'android'
        ? Dimensions.get('window').width <= 360
          ? 20
          : hp(3.5)
        : getScaleImageHeightIos(24),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(4),
  },

  textButton: {
    fontFamily: fonts.primary.normal,
    fontSize:
      Platform.OS === 'android'
        ? Dimensions.get('window').width <= 360
          ? 10
          : hp(1.8)
        : RFValue(11),
    color: '#FFF',
  },

  imageExpired: {
    width:
      Platform.OS === 'android'
        ? Dimensions.get('window').width <= 360
          ? 12
          : 14
        : getScaleIos(12),
    height:
      Platform.OS === 'android'
        ? Dimensions.get('window').width <= 360
          ? 12
          : 14
        : getScaleIos(12),
  },

  warningIcon: {
    width: wp(5),
    height: hp(2),
    marginRight: wp('3.5%'),
  },

  pointClaim: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textWarning: {
    fontFamily: fonts.primary.normal,
    color: '#FFFFFF',
    fontSize: RFValue(9),
  },

  textWarningEnableBtn: {
    fontFamily: fonts.primary.normal,
    color: '#FFFFFF',
    fontSize: RFValue(9),
  },

  textWarningDisableBtn: {
    fontFamily: fonts.primary.normal,
    color: '#FFFFFF',
    fontSize: RFValue(7.5),
    marginBottom: hp('-1.5%'),
  },

  btnClaim: function (isDisable) {
    return {
      backgroundColor: !isDisable ? '#0961C0' : '#0961C080',
      width: wp('35%'),
      height: hp('5%'),
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
    };
  },

  grid1: {
    width: '55.5%',
    justifyContent: 'space-evenly',
  },

  grid2: {
    width: '45.5%',
    alignItems: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    top: RFValue(5),
  },

  warningIconAndPoint: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: hp('-1%'),
  },
});
