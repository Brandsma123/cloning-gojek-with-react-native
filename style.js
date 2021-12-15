import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 15,
  },
  view2: {
    height: 54,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  nav1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 26,
    height: 26,
  },
  text: {
    fontSize: 10,
    color: '#43AB4A',
    marginTop: 4,
  },
  containerInput: {
    marginHorizontal: 17,
    flexDirection: 'row',
    paddingTop: 15,
  },
  styleInput: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 25,
    height: 40,
    fontSize: 13,
    paddingLeft: 45,
    paddingRight: 20,
    backgroundColor: 'white',
    marginRight: 18,
  },
  imageInput: {
    position: 'absolute',
    top: 5,
    left: 12,
  },
  viewInput: {
    position: 'relative',
    flex: 1,
  },
  imageIcon: {
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  mainFuture: {
    width: 58,
    height: 58,
    borderWidth: 1,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#EFEFEF',
  },
  mainFutureView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 18,
  },
  capsulFeature: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 18,
  },
  capsulFeature1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  textFuture: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 6,
  },
  capsulTextFuture: {
    alignItems: 'center',
    width: '25%',
  },
  advertisement: {
    height: 17,
    backgroundColor: '#F2F2F4',
    marginTop: 20,
  },
  newsImage: {
    height: 170,
    width: '100%',
    borderRadius: 16,
  },
  sectionNews: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  titleNews: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1C1C',
  },
  section: {
    paddingBottom: 20,
    paddingTop: 16,
    borderBottomColor: '#E8E9ED',
    borderBottomWidth: 1,
  },
  textNews: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#7A7A7A',
    marginBottom: 11,
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
  newsImage2: {
    height: undefined,
    // eslint-disable-next-line no-dupe-keys
    width: undefined,
    resizeMode: 'contain',
    flex: 1,
  },
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
  internalImage1: {
    height: 14,
    width: 55,
    marginLeft: 12,
  },
  viewInformation: {
    padding: 16,
    paddingBottom: 0,
  },
  profileInformation: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1C1C1C',
    marginTop: 15,
    marginBottom: 20,
  },
  sectionInformation: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  facebook: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  loginInformation: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#4A4A4A',
    width: '70%',
  },
  textInformation: {
    marginLeft: 16,
    flex: 1,
  },
  nearBy: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1C1C1C',
  },
  seeAll: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#61A756',
  },
  textNearBy: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  titleRestaurant: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1C1C1C',
  },
  imageFood: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 12,
  },
  imageNearBy: {
    height: undefined,
    // eslint-disable-next-line no-dupe-keys
    width: undefined,
    resizeMode: 'cover',
    flex: 1,
  },
  nearByFood: {
    flexDirection: 'row',
    paddingLeft: 16,
  },
  moveFoodNearBy: {
    marginRight: 16,
  },
});
