import { StyleSheet } from 'react-native';
import { BAF_COLOR_BLUE } from '../../../../../utils/constant';
import { fonts } from '../../../../../utils/fonts';
import {
  heightPercentageToDP as hp,
  // widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RFValue } from '../../../../../utils/utilization';

export default StyleSheet.create({
  content: {
    alignItems: 'center',
  },

  viewImage: {
    paddingTop: hp(9),
  },

  image: {
    width: RFValue(275),
    height: RFValue(222),
  },

  viewText: {
    width: '75%',
    paddingTop: hp(4),
  },

  text: {
    fontFamily: fonts.primary.normal,
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: RFValue(15),
    textAlign: 'center',
  },

  viewForm: {
    width: '75%',
    paddingTop: hp(5),
  },

  item: (hasError) => ({
    borderColor: hasError ? 'red' : '#A6AAB4',
    height: RFValue(38),
    borderWidth: 1,
    borderRadius: 4,
  }),

  input: {
    fontFamily: fonts.primary.normal,
    fontSize: RFValue(15),
  },

  button: (pristine) => ({
    marginTop: hp(12),
    width: '100%',
    height: RFValue(48),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: pristine ? 'grey' : BAF_COLOR_BLUE,
    borderRadius: RFValue(10),
  }),

  modalButtonText: {
    color: 'white',
    fontSize: RFValue(17),
    fontFamily: fonts.primary.normal,
  },

  errorDesc: {
    marginTop: RFValue(3),
    marginRight: RFValue(7),
    color: 'red',
    alignSelf: 'stretch',
    textAlign: 'right',
    fontSize: RFValue(12),
    fontFamily: fonts.primary.normal,
    marginBottom: RFValue(-14),
  },
});
