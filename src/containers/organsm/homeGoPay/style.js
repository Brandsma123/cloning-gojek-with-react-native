import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  goPay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2C5FB8',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    padding: 14,
  },
  goPayCOntainer: {
    marginHorizontal: 17,
    marginTop: 8,
  },
  textGoPay: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  iconGopay: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 14,
    backgroundColor: '#2F65BD',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  titleGoPay: {
    flex: 1,
    alignItems: 'center',
  },
  // eslint-disable-next-line no-dupe-keys
  textGoPay: {
    fontSize: 13,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 15,
  },
});
