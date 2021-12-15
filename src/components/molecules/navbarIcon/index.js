import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './style';

const NavbarIcon = props => {
  return (
    <View style={styles.nav1}>
      <Image style={styles.image} source={props.img} />
      <Text style={{fontSize: 10, color: '#43AB4A', marginTop: 4, color: props.active ? '#43AB4A' : '#545454'}}>{props.title}</Text>
    </View>
  );
};

export default NavbarIcon;
