import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view1}>
          <View style={styles.containerInput}>
            <View style={styles.viewInput}>
              <TextInput style= {styles.styleInput} placeholder= "What do you want to eat?"/>
              <Image source= {require('./icon/search.png')} style= {styles.imageInput} />
            </View>
            <View style={styles.imageIcon}>
              <Image source={require('./icon/promo.png')} />
            </View>
          </View>
        </View>
        <View style={styles.view2}>
          <View style={styles.nav1}>
            <Image style={styles.image} source={require('./icon/home-active.png')} />
            <Text style={styles.text}>Home</Text>
          </View>
          <View style={styles.nav2}>
            <Image style={styles.image} source={require('./icon/order.png')} />
            <Text style={styles.text}>Orders</Text>
          </View>
          <View style={styles.nav3}>
            <Image style={styles.image} source={require('./icon/inbox.png')} />
            <Text style={styles.text}>Help</Text>
          </View>
          <View style={styles.nav4}>
            <Image style={styles.image} source={require('./icon/account.png')} />
            <Text style={styles.text}>Inbox</Text>
          </View>
          <View style={styles.nav5}>
            <Image style={styles.image} source={require('./icon/home.png')} />
            <Text style={styles.text}>Account</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  nav2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav4: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav5: {

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
});