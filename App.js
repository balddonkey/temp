import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Jiwu from './src/modules/jiwu/home/';
import { createStackNavigator, createAppContainer } from "react-navigation";


 class App extends React.Component {
  render() {
    return (
      <Jiwu />
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: function({navigation}) {
      return {
        title: navigation.state.routeName
      }
    },
  }
});

export default createAppContainer(AppNavigator);