import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
});
