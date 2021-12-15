import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
  titleRestaurant: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1C1C1C',
  },
});
