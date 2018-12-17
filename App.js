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
    screen: App
  }
});

AppNavigator.navigationOptions = ({navigation}) => {
  let {routeName} = navigation.state.routes[navigation.state.index];
  // You can do whatever you like here to pick the title based on the route name
  let headerTitle = routeName;
  return {
      headerTitle,
  };
};

export default createAppContainer(AppNavigator);