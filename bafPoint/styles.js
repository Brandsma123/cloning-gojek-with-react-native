import { StyleSheet, Dimensions, Platform } from 'react-native';
import { fonts } from '../../../utils/fonts';
import { BAF_COLOR_BLUE } from '../../../utils/constant';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { getScaleIos, RFValue } from '../../../utils/utilization';

const screen = Dimensions.get('screen').height;

export default StyleSheet.create({
  mainContainer: {
    height: '100%',
  },

  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingText: {
    fontSize: Platform.OS === 'android' ? 18 : getScaleIos(24),
    marginTop: hp('10%'),
    color: 'grey',
    fontFamily: fonts.primary.bold,
  },

  containerTermAndCondition: {
    backgroundColor: 'white',
  },
  wrapTextHeader: {
    fontFamily: fonts.primary.normal,
    marginTop: 15,
    marginBottom: 15,
    marginRight: 15,
    marginLeft: 15,
  },
  textHeader: {
    lineHeight: 20,
    textAlign: 'justify',
    color: 'rgba(0, 0, 0, 0.8)',
    fontFamily: fonts.primary.normal,
  },
  renderHeader: (expanded) => ({
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
    borderColor: 'rgba(0, 47, 95, 0.2)',
    borderWidth: 1,
    borderBottomWidth: expanded ? 0 : 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: expanded ? 0 : 5,
    borderBottomRightRadius: expanded ? 0 : 5,

    alignItems: 'center',

    borderStyle: 'solid',
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: 'white',
  }),

  wrapTextRenderHeader: {
    width: Dimensions.get('window').width > 360 ? '94%' : 240,
  },

  textRenderHeader: {
    color: BAF_COLOR_BLUE,
    fontFamily: fonts.primary.bold,
    lineHeight: 18,
    // backgroundColor: 'grey'
  },
  iconExpanded: {
    fontSize: 18,
    color: BAF_COLOR_BLUE,
  },
  wrapRenderContent: {
    borderStyle: 'solid',
    borderColor: 'rgba(0, 47, 95, 0.2)',
    marginLeft: 15,
    marginRight: 15,
    borderWidth: 1,
    borderTopWidth: 0,
    marginTop: -1,
    backgroundColor: 'white',
  },

  wrapContent: {
    marginLeft: 15,
    marginRight: 5,
    marginTop: 4,
    marginBottom: 4,
  },
  itemContent: {
    color: '#000000CC',
    fontFamily: fonts.primary.normal,
    lineHeight: 18,
  },
  wrapNumber: {
    textAlign: 'justify',
    color: '#000000CC',
    fontFamily: fonts.primary.normal,
    lineHeight: 18,
  },

  historyContainerComponent: {
    height: hp('100%'),
    paddingBottom: 0,
    paddingHorizontal: RFValue(15),
  },

  termAndConditionContainerComponent: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 7,
    borderColor: '#F4F4F4',
  },

  cardHistory: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: hp('13%'),
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 5,
    justifyContent: 'space-between',
    padding: 10.5,
    marginBottom: 15,
  },

  shadowIphone: {
    shadowColor: 'rgba(51, 51, 51, 0.1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2.5,
  },

  viewDescPoint: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  fontDescPoint: {
    fontFamily: fonts.primary.bold,
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: Platform.OS === 'android' ? hp('2') : getScaleIos(16),
    maxWidth: '75%',
    lineHeight: Dimensions.get('screen').width > 320 ? 22 : 15,
    marginBottom: 5,
  },

  fontValuePointIncrement: {
    color: '#002F5F',
    fontSize: Platform.OS === 'android' ? hp('2') : getScaleIos(16),
  },

  fontValuePointDecrement: {
    color: '#EEAF30',
    fontSize: Platform.OS === 'android' ? hp('2') : getScaleIos(16),
  },

  fontDatePoint: {
    fontFamily: fonts.primary.normal,
    fontSize: 12,
  },

  borderWhite: {
    backgroundColor: 'white',
    position: 'absolute',
    top: Dimensions.get('window').width > 360 ? 105 : 124,
    height: 10,
    width: '100%',
    zIndex: 1,
  },

  borderHeader: {
    backgroundColor: BAF_COLOR_BLUE,
    position: 'absolute',
    top: Dimensions.get('window').width > 360 ? 90 : 5,
    height: 5,
    width: '50%',
    zIndex: 1,
  },

  borderHeaderRight: {
    backgroundColor: BAF_COLOR_BLUE,
    position: 'absolute',
    top: Dimensions.get('window').width > 360 ? 90 : 5,
    height: 5,
    width: '50%',
    zIndex: 1,
    alignSelf: 'flex-end',
  },

  containerHistoryIsNotExist: {
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-around',
    height: 200,
  },

  imageHistoryIsNotExist: {
    width: 152,
    height: 152,
  },

  fontStyleHistoryNotExist: {
    fontFamily: fonts.primary.normal,
    color: 'rgba(115, 115, 115, 0.8)',
    fontSize: 16,
  },

  viewButtonAgree: {
    height: '15%',
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingBottom: 10,
  },

  btnAgree: {
    backgroundColor: BAF_COLOR_BLUE,
    height: 50,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fontStyleBtnAgree: {
    fontFamily: fonts.primary.bold,
    color: '#FFFFFF',
  },

  containerWrapContentNumber: {
    flexDirection: 'row',
  },

  containerItemContent: {
    flex: 1,
  },

  contentStyle: {
    // paddingBottom: 80,
    backgroundColor: 'white',
    borderWidth: 0,
  },

  viewContentStyle: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderColor: '#F4F4F4',
  },

  accordionStyle: { borderWidth: 0 },

  btnTermAndCondition: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingLeft: wp('5%'),
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: { width: -1.5, height: 5 },
    shadowOpacity: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1.5,
  },

  btnImageTermAndCondition: {
    width: wp('4%'),
    height: wp('4%'),
  },

  textStyleTermAndCondition: {
    fontFamily: fonts.primary.normal,
    color: BAF_COLOR_BLUE,
    fontSize: RFValue(12, screen),
    marginLeft: 10,
  },

  iconTermAndCondition: {
    fontSize: RFValue(12, screen),
    marginLeft: 10,
    transform: [
      {
        rotate: '90deg',
      },
    ],
  },

  textHistoryTitle: {
    fontFamily: fonts.primary.bold,
    color: BAF_COLOR_BLUE,
    fontSize: getScaleIos(16),
    paddingVertical: hp('2.45%'),
  },

  viewTextHistoryTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '42.5%',
    paddingBottom: hp('1.5%'),
    maxHeight: hp('40%'),
  },

  barTitle: {
    width: wp('1.5%'),
    height: getScaleIos(16),
    borderRadius: 3,
    backgroundColor: '#F6B333',
    marginRight: wp('2%'),
  },

  containerCard: {
    height: hp('55%'),
  },
});
