import styles from './style';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

const GoInfo = () => {
  return (
    <View style={styles.viewInformation}>
      <View style={styles.internalImage1}>
        <Image
          source={require('../../../assets/logo/gojek.png')}
          style={styles.newsImage2}
        />
      </View>
      <Text style={styles.profileInformation}>Complete your profile</Text>
      <View style={styles.sectionInformation}>
        <View>
          <Image
            source={require('../../../assets/dumy/facebook-connect.png')}
          />
        </View>
        <View style={styles.textInformation}>
          <Text style={styles.facebook}>Connect with facebook</Text>
          <Text style={styles.loginInformation}>
            Log in faster without verification code
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonSection}>
        <Text style={styles.textButtonSection}>CONNECT</Text>
      </TouchableOpacity>
      <View style={styles.niewViewFood1}></View>
    </View>
  );
};

export default GoInfo;
