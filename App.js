import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Jiwu from './src/modules/Jiwu';

import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Jiwu.Home,
  },
  Details: {
    screen: Jiwu.Details
  }
});

export default createAppContainer(AppNavigator);