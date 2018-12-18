
import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class HeadItem extends Component {
  

  render() {
    return (
      <View style={styles.container}>
        <View></View>
        <View style={styles.textContainer}>
        <Text>总记录</Text>
        <Text>7,739</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  textContainer: {
    flexDirection: 'column'
  }
});