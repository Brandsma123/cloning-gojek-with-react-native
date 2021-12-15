import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  viewFood: {
    padding: 16,
  },
  relativeFood: {
    position: 'relative',
  },
  bannerFood: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  textBanner1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  textBanner2: {
    fontSize: 13,
    fontWeight: '400',
    color: 'white',
    marginTop: 8,
  },
  bannerView: {
    flex: 1,
  },
  niewViewFood1: {
    borderBottomColor: '#E8E9ED',
    borderBottomWidth: 1,
    marginTop: 16,
  },
  buttonSection: {
    backgroundColor: '#61A756',
    paddingHorizontal: 12,
    paddingVertical: 11,
    alignSelf: 'flex-end',
    borderRadius: 4,
  },
  textButtonSection: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  newsImage: {
    height: 170,
    width: '100%',
    borderRadius: 16,
  },
  newsImage1: {
    height: 14,
    width: 55,
    position: 'absolute',
    top: 16,
    left: 16,
  },
  viewSection: {
    position: 'relative',
  },
  imageSection1: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.15,
    backgroundColor: 'black',
    borderRadius: 5,
    // eslint-disable-next-line no-dupe-keys
  },
  newsImage2: {
    height: undefined,
    // eslint-disable-next-line no-dupe-keys
    width: undefined,
    resizeMode: 'contain',
    flex: 1,
  },
});
