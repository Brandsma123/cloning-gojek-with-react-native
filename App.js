import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import Home from './src/containers/page/home';
import Router from './src/config/router';
class App extends Component {
  render() {
    return <Router />;
  }
}

export default App;
